import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage, Image, StatusBar, TouchableOpacity, Modal } from "react-native";

import styles from './styles';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

const ShowDocument = ({ route, navigation }) => {
    const { documentId } = route.params;
    const [imageUri, setImageUri] = useState('');
    const [imagemDocumentoFrente, setImagemDocumentoFrente] = useState(null);
    const [imagemDocumentoVerso, setImagemDocumentoVerso] = useState(null);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const baseUrl = 'http://192.168.1.2:3333';

    if (modalIsVisible) {
        StatusBar.setBackgroundColor('rgba(0,0,0,0.5)');
    } else {
        StatusBar.setBackgroundColor('#42A8EB');
    }

    useEffect(() => {
        if (documentId) {
            AsyncStorage.getItem('id')
                .then(async userId => {
                    const { data } = await api.get(`/documentos/${userId}/${documentId}`);
                    setImagemDocumentoFrente(data.imagemDocumentoFrente);
                    setImagemDocumentoVerso(data.imagemDocumentoVerso);
                    setImageUri(data.imagemDocumentoFrente);
                });
        }
    }, []);

    const flipDocument = () => {
        if (imageUri === imagemDocumentoFrente) {
            if (imagemDocumentoVerso) {
                setImageUri(imagemDocumentoVerso);
            }
        } else {
            setImageUri(imagemDocumentoFrente);
        }
    }

    const deleteDocument = async () => {
        await api.delete(`/documentos/${documentId}`);
        navigation.navigate('Dashboard');
    }

    return (
        <View style={styles.showDocumentWrapper}>
            <TouchableOpacity
                style={styles.imageTouch}
                activeOpacity={imagemDocumentoVerso ? 0.8 : 1}
                onPress={flipDocument}
            >
                <Image
                    style={styles.imageDocument}
                    source={{
                        uri: `${baseUrl}/uploads/${imageUri}`
                    }}
                />
            </TouchableOpacity>
            <View style={styles.buttonsOptionsWrapper}>
                <TouchableOpacity
                    style={styles.buttonDelete}
                    activeOpacity={0.8}
                    onPress={() => setModalIsVisible(true)}
                >
                    <Text style={styles.buttonsText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonUpdate}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonsText}>Editar</Text>
                </TouchableOpacity>
            </View>
            <Modal
                style={{ flex: 1 }}
                transparent={true}
                animationType='fade'
                visible={modalIsVisible}
            >
                <View style={styles.modalWrapper}>
                    <View style={styles.confirmBox}>
                        <Text style={styles.messageConfirmDelete}>Deseja realmente deletar este documento?</Text>
                        <View style={styles.buttonsModalOptionsWrapper}>
                            <TouchableOpacity
                                style={styles.buttonDelete}
                                activeOpacity={0.8}
                                onPress={() => setModalIsVisible(false)}
                            >
                                <Text style={styles.buttonsText}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.buttonConfirm}
                                activeOpacity={0.8}
                                onPress={deleteDocument}
                            >
                                <Text style={styles.buttonsText}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
        </View>
    )

}

export default ShowDocument;