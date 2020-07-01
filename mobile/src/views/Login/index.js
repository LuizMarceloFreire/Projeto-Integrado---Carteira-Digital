import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, AsyncStorage, StatusBar } from 'react-native';
import styles from './styles';

import api from '../../services/api';

import logo from '../../assets/img/logo.png';
import NeedHelp from '../../components/NeedHelp';
import { useFocusEffect } from '@react-navigation/native';


const Login = ({ navigation }) => {

    useFocusEffect(() => {
        StatusBar.setBackgroundColor('#42A8EB');
    }, []);

    const [cpf, setCpf] = useState('');
    let senha = '';

    const setClearNumber = (number) => {
        setCpf(number.replace(/[^0-9]/g, ""));
    };
    const isCpf = () => {
        return true
    };

    const login = () => {
        if (cpf && senha && isCpf()) {
            api.post('/login', {
                cpf,
                senha
            }).then(result => {
                if (result.data.result) {
                    AsyncStorage.setItem('id', String(result.data.id));
                    navigation.navigate('Dashboard');
                } else {
                    console.log(`erro: ${result}`);
                }
            });
        }
    }

    return (
        <View style={styles.loginWrapper}>
            <View>
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
                        keyboardType='number-pad'
                        value={cpf}
                        onChange={(e) => { setClearNumber(e.nativeEvent.text) }}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={[styles.inputText, styles.inputTextLest]}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Senha'
                        placeholderTextColor='#CCC'
                        onChange={(e) => { senha = e.nativeEvent.text }}
                    />
                    <View style={styles.buttonsWrapper}>
                        <TouchableOpacity
                            style={styles.buttonJoin}
                            onPress={() => navigation.navigate('Join')}
                        >
                            <Text style={styles.buttonJoinText}>Cadastre-se</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonLogin}
                            onPress={login}
                        >
                            <Text style={styles.buttonLoginText}>Login</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <NeedHelp />
        </View>
    )

}

export default Login