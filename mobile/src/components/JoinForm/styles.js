import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    inputText: {
        width: '100%',
        fontSize: 22,
        backgroundColor: '#E8E6E6',
        borderColor: '#000',
        borderRadius: 30,
        height: 50,
        paddingLeft: 18,
        paddingRight: 18,
        marginBottom: 15,
    },

    buttonsWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },

    buttonsWrapperOne: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    buttonJoin: {
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 20,
        backgroundColor: '#42A8EB'
    },

    buttonBack: {
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 20,
        backgroundColor: '#5cb85c'
    },

    buttonJoinText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'uppercase',
        color: 'white',
    },
});

export default styles