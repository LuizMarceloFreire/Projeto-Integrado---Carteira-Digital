import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage, StatusBar, TouchableOpacity, Button } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';

import ListOfDocuments from '../../components/ListOfDocuments';
import CameraToAddDocument from '../../components/CameraToAddDocument';
import ExpoImageCrop from '../../components/ExpoImageCrop/';
import api from '../../services/api';

import styles from './styles';

const Dashboard = ({ navigation }) => {
    const isFocused = useIsFocused();

    useFocusEffect(() => {
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor('white');
        getDocuments();
    }, []);

    const [documents, setDocuments] = useState([]);
    const insets = useSafeArea();

    const safeAreaStyle = {
        paddingTop: insets.top,
    }

    const getDocuments = async () => {
        const id = await AsyncStorage.getItem('id');
        const response = await api.get(`/documentos/${id}`);
        setDocuments(response.data);
    }

    return (
        <View style={[safeAreaStyle, styles.deashbordWrapper]} >
            <ListOfDocuments
                documents={documents}
                navigation={navigation}
            />

            <View style={styles.buttonAddDocumentWrapper}>
                <TouchableOpacity
                    style={styles.buttonAddDocument}
                    onPress={() => navigation.navigate('CreateNewDocument')}
                >
                    <Text style={styles.buttonAddDocumentText}>+</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}


export default Dashboard;