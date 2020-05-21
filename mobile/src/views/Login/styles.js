import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

    loginWrapper: {
        paddingTop: 40,
        paddingLeft: 30,
        paddingRight: 30,
        height: screenHeight,
        backgroundColor: '#42A8EB',
        height: '100%',
    },
    loginHellow: {
        fontSize: 35,
        marginBottom: 40,
        color: 'white',
    },

    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },

    logoText: {
        color: 'white',
        fontSize: 16,
        marginTop: 8,
    },

    formWripper: {
        alignItems: 'center',
    },

    inputTextLest: {
        marginTop: 20,
        marginBottom: 24,
    },

    inputText: {
        width: '100%',
        fontSize: 22,
        backgroundColor: '#e8e6e6',
        borderColor: '#000',
        borderRadius: 30,
        height: 50,
        paddingLeft: 18,
        paddingRight: 18,
    },

    buttonsWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    buttonLogin: {
        width: 134,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#4246C8',
        borderRadius: 30,
    },

    buttonLoginText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
    },

    buttonJoin: {
        borderWidth: 1,
        borderColor: '#000',
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 30,
    },

    buttonJoinText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'uppercase',
        color: 'white',
    },

    textRed: {
        color: '#ff0505'
    },

    textHelp: {
        fontSize: 16,
        top: 190,
    }


});

export default styles;