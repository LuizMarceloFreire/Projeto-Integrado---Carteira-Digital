import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';


const JoinForm = ({ navigation }) => {
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    let senha;
    let confirmSenha;

    const setClearNumber = (number) => {
        setCpf(number.replace(/[^0-9]/g, ""));
    };

    const Join = () => {

        if (nome && email && cpf && senha && confirmSenha) {
            if (senha === confirmSenha) {
                api.post('/usuarios', {
                    nome,
                    cpf,
                    email,
                    senha
                }).then(res => {
                    if (res.data.message) {
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
                onChange={e => setNome(e.nativeEvent.text)}
            />
            <TextInput style={styles.inputText}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='E-mail'
                placeholderTextColor='#CCC'
                onChange={e => setEmail(e.nativeEvent.text)}
            />
            <TextInput style={styles.inputText}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='CPF'
                placeholderTextColor='#CCC'
                keyboardType='number-pad'
                value={cpf}
                onChange={(e) => setClearNumber(e.nativeEvent.text)}
            />
            <TextInput style={styles.inputText}
                secureTextEntry={true}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Senha'
                placeholderTextColor='#CCC'
                onChange={e => senha = e.nativeEvent.text}
            />
            <TextInput style={styles.inputText}
                secureTextEntry={true}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Confirme a senha'
                placeholderTextColor='#CCC'
                onChange={e => confirmSenha = e.nativeEvent.text}
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