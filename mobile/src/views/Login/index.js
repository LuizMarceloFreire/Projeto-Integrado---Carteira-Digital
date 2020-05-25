import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

import logo from '../../assets/img/logo.png';

const Login = () => {
    return (
        <View style={styles.loginWrapper}>
            <Text style={styles.loginHellow}>Bem-Vindo(a)!</Text>
            <View style={styles.logo}>
                <Image source={logo} />
                <Text style={styles.logoText}>Carteira Digital</Text>
            </View>
            <View style={styles.formWripper}>
                <TextInput style={styles.inputText}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='CPF'
                    placeholderTextColor='#CCC'
                />
                <TextInput
                    style={[styles.inputText, styles.inputTextLest]}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Senha'
                    placeholderTextColor='#CCC'
                />
                <View style={styles.buttonsWrapper}>
                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={styles.buttonLoginText}>Login</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonJoin}>
                        <Text style={styles.buttonJoinText}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.textHelp}>Precisa de <Text style={styles.textRed} >Ajuda ?</Text></Text>
        </View>
    )

}

export default Login