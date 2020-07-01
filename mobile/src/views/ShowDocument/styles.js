import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    showDocumentWrapper: {
        paddingTop: 80,
        paddingBottom: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#42A8EB',
    },

    imageTouch: {
        width: '80%',
        height: '88%',
        borderRadius: 20,
        backgroundColor: 'white',
    },

    imageDocument: {
        flex: 1,
        borderRadius: 20,
    },

    buttonsOptionsWrapper: {
        width: '80%',
        height: '8%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    buttonUpdate: {
        backgroundColor: '#0275d8',
        paddingTop: 10,
        paddingBottom: 10,
        padding: 30,
        borderRadius: 8,
    },

    buttonDelete: {
        backgroundColor: '#d9534f',
        paddingTop: 10,
        paddingBottom: 10,
        padding: 30,
        borderRadius: 8,
    },

    buttonConfirm: {
        backgroundColor: '#5cb85c',
        paddingTop: 10,
        paddingBottom: 10,
        padding: 30,
        borderRadius: 8,
    },

    buttonsText: {
        color: 'white',
        fontSize: 16,
    },

    modalWrapper: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    confirmBox: {
        maxWidth: 320,
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        borderRadius: 8,
    },

    messageConfirmDelete:{
        fontSize: 20,
        textAlign:'justify'
    },

    buttonsModalOptionsWrapper: {
        marginTop: 18,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },


});

export default styles;
