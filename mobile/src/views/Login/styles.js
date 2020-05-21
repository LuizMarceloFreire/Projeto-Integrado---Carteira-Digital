import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

    loginWrapper: {
        marginTop: 80,
        paddingLeft: 30,
        paddingRight: 30,
        height: screenHeight,
    },
    loginHellow: {
        fontSize: 72,
        marginBottom: 32,
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
        backgroundColor: '#42a8eb',
        borderRadius: 30,
    },

    buttonLoginText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
    },

    buttonJoin: {
        borderWidth: 1,
        borderColor: '#000',
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 30,
    },

    buttonJoinText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'uppercase',
    },

    textRed: {
        color: '#ff0505'
    },

    textHelp:  {
        position: 'absolute',
        fontSize: 16,
        bottom: 120,
        left: 30,
    }


});

export default styles;