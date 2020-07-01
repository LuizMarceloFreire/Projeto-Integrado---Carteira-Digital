import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Modal, Image, AsyncStorage } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { ImageManipulator } from 'expo-image-crop';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';
import { set } from 'react-native-reanimated';

const CameraToAddDocument = ({ typeDocumentId, onConfirmedImage, onPressBack, hasVerse }) => {
    useFocusEffect(() => {
        StatusBar.setHidden(true);
    }, []);

    const [hasPermission, setHasPermision] = useState(null);
    const [uri, setUri] = useState(null);
    const [open, setOpen] = useState(false);
    const type = Camera.Constants.Type.back;
    const camRef = useRef(null);
    const [imageBase64, setImageBase64] = useState(null);
    const [imageVerseBase64, setImageVerseBase64] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermision(status === 'granted');
        })();
    }, []);

    const onToggleModal = () => {
        setOpen(false);
    }

    const onPictureChoosed = async (res) => {
        if (hasVerse) {
            //tem verso.
            if (res.base64 === undefined) {
                // nao foi editado.
                if (!imageVerseBase64) {
                    //Estao primeira foto.
                    setUri(null);
                } else {
                    onConfirmedImage({
                        imageBase64,
                        imageVerseBase64,
                        typeDocumentId
                    });
                }

            } else {
                //foi editado
                if (imageVerseBase64) {
                    // e a segunda
                    setImageVerseBase64(res.base64);
                } else {
                    // primeira.
                    setImageBase64(res.base64);
                    setUri(null);
                }
            }
        } else {
            //nao tem verso.
            if (res.base64 !== undefined) {
                //foi editado.
                await setImageBase64(res.base64);
            }
            onConfirmedImage({
                imageBase64,
                imageVerseBase64,
                typeDocumentId
            });
        }
    }

    const takePicture = async () => {
        if (camRef) {
            const data = await camRef.current.takePictureAsync({ base64: true });
            setUri(data.uri);

            if (hasVerse && imageBase64) {
                setImageVerseBase64(data.base64);
            } else {
                setImageBase64(data.base64);
            }

            setOpen(true);
        }
    }

    if (hasPermission === null) {
        return (
            <View >
                <Text>permisao null</Text>
            </View>
        )
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

                <TouchableOpacity
                    style={styles.cameraBackButton}
                    onPress={onPressBack}
                >
                    <Text>Voltar</Text>
                </TouchableOpacity>
                {
                    uri &&
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={open}
                        style={{
                            height: '100%',
                            width: '100%',
                        }}
                    >
                        <ImageManipulator
                            saveOptions={{ base64: true }}
                            photo={{ uri }}
                            isVisible={true}
                            onPictureChoosed={
                                res => onPictureChoosed(res)
                            }
                            onToggleModal={onToggleModal}
                            btnTexts={{
                                crop: 'Recortar',
                                done: 'Confirmar',
                                processing: 'carregando...',
                            }}
                        />
                    </Modal>
                }
            </Camera>
        </View>
    )
}

export default CameraToAddDocument;