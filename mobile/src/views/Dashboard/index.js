import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

import ListOfDocuments from '../../components/ListOfDocuments';

import api from '../../services/api';

import styles from './styles';

const Dashboard = ({ navigation }) => {

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const getDocuments = async () => {
            const id = await AsyncStorage.getItem('id');
            const response = await api.get(`/documentos/${id}`);
            setDocuments(response.data);
        }
        getDocuments();
    }, []);



    return (
        <View style={styles.deashbordWrapper}>
            <View>
                <ListOfDocuments documents={documents} />
            </View>
            <View style={styles.buttonAddDocumentWrapper}>
                <View style={styles.buttonAddDocument}>
                    <Text style={styles.buttonAddDocumentText}>+</Text>
                </View>
            </View>
        </View>
    )
}


export default Dashboard;