import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

import ListOfDocuments from '../../components/ListOfDocuments';
import ListTypesDocuments from '../../components/ListTypesDocuments';

import api from '../../services/api';

import styles from './styles';

const Dashboard = ({ navigation }) => {

    const [documents, setDocuments] = useState([]);

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
        <ListTypesDocuments typesList={typesList} />

        //<ListOfDocuments documents={documents}/>
    )
}


export default Dashboard;