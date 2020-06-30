import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import ListOfDocuments from '../../components/ListOfDocuments';
import ListTypesDocuments from '../../components/ListTypesDocuments';
import CameraToAddDocument from '../../components/CameraToAddDocument';
import api from '../../services/api';

import styles from './styles';


const Dashboard = ({ navigation }) => {

    const [documents, setDocuments] = useState([]);
    const insets = useSafeArea();

    const safeAreaStyle = {
        paddingTop: insets.top,
    }

    const typesList = [
        {
            id: 2,
            typeName: 'CPF',
        },
        {
            id: 1,
            typeName: 'RG',
        },
    ];

    useEffect(() => {
        const getDocuments = async () => {
            const id = await AsyncStorage.getItem('id');
            const response = await api.get(`/documentos/${id}`);
            setDocuments(response.data);
        }
        getDocuments();
    }, []);



    return (
        //<ListOfDocuments documents={documents} />
        //<ListTypesDocuments typesList={typesList} />
        <View style={safeAreaStyle} >
            <CameraToAddDocument />
        </View>
    )
}


export default Dashboard;