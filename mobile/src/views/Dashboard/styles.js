import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    deashbordWrapper: {
        paddingTop: 30,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    buttonAddDocumentWrapper: {
        alignItems: 'flex-end',
        marginRight: 10,
        marginBottom: 10,
    },

    buttonAddDocument: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 50,
        
        backgroundColor: '#42A8EB',
        paddingBottom: 10
    },

    buttonAddDocumentText: {
        fontSize: 55,
        color: 'white',

    }
})

export default styles