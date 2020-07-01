import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, AsyncStorage } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import ListTypesDocuments from '../../components/ListTypesDocuments';

import styles from './styles';
import api from '../../services/api';
import CameraToAddDocument from '../../components/CameraToAddDocument';

const CreateNewDocument = ({ navigation }) => {
    const isFocused = useIsFocused();

    const [typesList, setTypesList] = useState([]);
    const [showCamera, setShowCamera] = useState(false);
    const [showListTypesDocuments, setShowListTypesDocuments] = useState(false);
    const [typeDocumentId, setTypeDocumentId] = useState(null);
    const [hasVerse, setHasVerse] = useState(null);


    useEffect(() => {
        const getTypesDocuments = async () => {
            const response = await api.get('/tipos-documento');
            setTypesList(response.data);
            setShowListTypesDocuments(true);

        }
        getTypesDocuments();
    }, []);

    const saveDocument = async (imageBase64, typeDocumentId, imageVerseBase64) => {
        const id = await AsyncStorage.getItem('id');
        await api.post('/documentos', {
            imagemDocumentoFrente: imageBase64,
            imagemDocumentoVerso: imageVerseBase64,
            tipoDocumentoId: typeDocumentId,
            usuarioId: Number(id),
        });
    }

    return (
        <View>
            {
                showListTypesDocuments &&
                <ListTypesDocuments
                    typesList={typesList}
                    onTypeDocumentChoosed={
                        async (res) => {
                            console.log(res.typeDocumentId);
                            await setTypeDocumentId(res.typeDocumentId);
                            await setHasVerse(res.hasVerse);
                            await setShowListTypesDocuments(false);
                            await setShowCamera(true);
                        }
                    }
                    onPressBack={
                        () => {
                            navigation.navigate('Dashboard');
                        }

                    }
                />
            }
            {
                showCamera &&
                <CameraToAddDocument
                    typeDocumentId={typeDocumentId}
                    hasVerse={hasVerse}
                    onConfirmedImage={
                        async ({ imageBase64, typeDocumentId, imageVerseBase64 }) => {
                            await saveDocument(imageBase64, typeDocumentId, imageVerseBase64);
                            navigation.navigate('Dashboard');
                        }
                    }
                    onPressBack={() => {
                        setShowCamera(false);
                        setShowListTypesDocuments(true);
                    }}
                />
            }
        </View >
    )
}

export default CreateNewDocument;