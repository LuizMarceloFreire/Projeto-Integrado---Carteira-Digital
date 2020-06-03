import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';


const JoinForm = ({ navigation }) => {
    const [isLogin, setIsLogin] = useState(false);

    let nome;
    let email;
    let cpf;
    let senha;
    let confirmSenha;


    const Join = () => {

        if (nome && email && cpf && senha && confirmSenha) {
            if (senha === confirmSenha) {
                api.post('/usuarios', {
                    nome,
                    cpf,
                    email,
                    senha
                }).then(res => {
                    if (res.data) {
                        console.log(res.data.message);
                    } else {
                        navigation.goBack();
                    };
                });
            } else {
                console.log('senha errada!');
            }
        }

    }


    return (
        <>
            <TextInput style={styles.inputText}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Nome'
                placeholderTextColor='#CCC'
                onChange={e => { nome = e.nativeEvent.text }}
            />
            <TextInput style={styles.inputText}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='E-mail'
                placeholderTextColor='#CCC'
                onChange={e => { email = e.nativeEvent.text }}
            />
            <TextInput style={styles.inputText}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='CPF'
                placeholderTextColor='#CCC'
                onChange={e => { cpf = e.nativeEvent.text }}
            />
            <TextInput style={styles.inputText}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Senha'
                placeholderTextColor='#CCC'
                onChange={e => { senha = e.nativeEvent.text }}
            />
            <TextInput style={styles.inputText}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Confirme a senha'
                placeholderTextColor='#CCC'
                onChange={e => { confirmSenha = e.nativeEvent.text }}
            />
            <View style={styles.buttonsWrapper}>
                <TouchableOpacity
                    style={styles.buttonJoin}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonJoinText}>
                        Voltar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonFormBack}
                    onPress={Join}
                >
                    <Text style={styles.buttonJoinText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );


}

export default JoinForm;