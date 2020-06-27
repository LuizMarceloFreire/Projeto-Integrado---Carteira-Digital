import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Modal, Image, AsyncStorage } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import api from '../../services/api';

import styles from './styles';


const CameraToAddDocument = () => {
    StatusBar.setHidden(true);

    const [hasPermission, setHasPermision] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [open, setOpen] = useState(false);
    const type = Camera.Constants.Type.back;
    const camRef = useRef(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermision(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return (
            <View >
                <Text>permisao null</Text>
            </View>
        )
    }

    const takePicture = async () => {
        if (camRef) {
            const data = await camRef.current.takePictureAsync({ base64: true });
            setImage(data.base64);
            setCapturedPhoto(data.uri);
            setOpen(true);
        }
    }

    const saveDocument = async () => {
        const id = await AsyncStorage.getItem('id');
        await api.post('/documentos', {
            imagemDocumentoFrente: image,
            tipoDocumentoId: 2,
            usuarioId: Number(id),
        });
        console.log('enviado!');
    }

    if (!hasPermission) {
        return (
            <View>
                <Text>Permisão negada</Text>
            </View>
        );
    }

    return (
        <View style={styles.cameraWrapper}>
            <Camera
                style={styles.camera}
                type={type}
                ref={camRef}
                ratio="16:9"
                pictureSize="65535"
            >
                <TouchableOpacity
                    style={styles.cameraButton}
                    onPress={takePicture}
                >
                    <FontAwesome
                        name="camera"
                        size={23}
                        color="#FFF"
                    />
                </TouchableOpacity>
                {
                    capturedPhoto &&
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={open}
                    >
                        <View style={styles.showPictureWrapper}>
                            <Image
                                style={styles.showPictureImage}
                                source={{
                                    uri: capturedPhoto,
                                }}
                            />
                            <View style={styles.buttonsWrapper}>
                                <TouchableOpacity
                                    style={styles.cancelButton}
                                    onPress={() => setOpen(false)}
                                >
                                    <Text style={styles.textButton}>Cancelar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.confirmButton}
                                    onPress={saveDocument}
                                >
                                    <Text style={styles.textButton}>Confirmar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                }
            </Camera>
        </View>
    )
}

export default CameraToAddDocument;