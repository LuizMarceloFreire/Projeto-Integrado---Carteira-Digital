import { StyleSheet } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    cameraWrapper: {
        width: '100%',
        height: '100%',
    },

    camera: {
        width: '100%',
        height: '100%'
    },

    cameraButton: {
        backgroundColor: '#42A8EB',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        margin: 20,
        borderRadius: 10,
        position: 'absolute',
        width: '90%',
        bottom: 70,
    },

    cameraBackButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        margin: 20,
        borderRadius: 10,
        position: 'absolute',
        width: '90%',
        bottom: 10,
    },

    modalStyle: {
        height: '100%',
        width: '100%',
    },
});

export default styles;