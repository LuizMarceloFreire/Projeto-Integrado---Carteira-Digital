import { StyleSheet } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    cameraWrapper: {
        width: '100%',
        height: '100%',
    },

    camera: {
        flex: 1,
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
        bottom: 10,
    },

    showPictureWrapper: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#42A8EB',
    },

    showPictureImage: {
        width: '100%',
        height: '90%',
        borderRadius: 20,
    },

    buttonsWrapper: {
        width: '100%',
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '10%',
        flexDirection: 'row'
    },

    cancelButton: {
        backgroundColor: '#d9534f',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 8,
    },

    confirmButton: {
        backgroundColor: '#5cb85c',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 8,
    },

    textButton: {
        fontSize: 18,
        color: 'white',
    },
});

export default styles;