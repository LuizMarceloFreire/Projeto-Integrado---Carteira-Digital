import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

import logo from '../../assets/img/logo.png';
import NeedHelp from '../../components/NeedHelp';

const Login = ({ navigation }) => {

    const [cpf, setCpf] = useState('');

    const setClearNumber = (number) => {
        setCpf(number.replace(/[^0-9]/g, ""));
    };

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
                        style={[styles.inputText, styles.inputTextLest]}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Senha'
                        placeholderTextColor='#CCC'

                    />
                    <View style={styles.buttonsWrapper}>
                        <TouchableOpacity
                            style={styles.buttonJoin}
                            onPress={() => navigation.navigate('Join')}
                        >
                            <Text style={styles.buttonJoinText}>Cadastre-se</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonLogin}>
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