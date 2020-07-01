import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    deashbordWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',

    },

    buttonAddDocumentWrapper: {
        alignItems: 'flex-end',
        marginRight: 10,
        marginBottom: 10,
    },

    buttonAddDocument: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#42A8EB',
        paddingBottom: 10
    },

    buttonAddDocumentText: {
        fontSize: 50,
        color: 'white',

    }
})

export default styles