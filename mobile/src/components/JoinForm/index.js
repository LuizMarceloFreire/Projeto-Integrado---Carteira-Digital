import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

const JoinForm = () => {
    const [isPassword, setIsPassword] = useState(false);

    const JoinButtons = () => {
        if (isPassword) {
            return (
                <View style={styles.buttonsWrapper}>
                    <TouchableOpacity
                        style={styles.buttonJoin}
                        onPress={() => { setIsPassword(!isPassword) }}
                    >
                        <Text style={styles.buttonJoinText}>
                            Voltar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonBack}
                    >
                        <Text style={styles.buttonJoinText}>
                            Cadastre-se
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }

        return (
            <View style={styles.buttonsWrapperOne}>
                <TouchableOpacity
                    style={styles.buttonJoin}
                    onPress={() => { setIsPassword(!isPassword) }}
                >
                    <Text style={styles.buttonJoinText}>
                        Proximo
                    </Text>
                </TouchableOpacity>
            </View>
        );

    }

    if (isPassword) {
        return (
            <View>
                <TextInput style={styles.inputText}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Senha'
                    placeholderTextColor='#CCC'
                />
                <TextInput style={styles.inputText}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Confirme a senha'
                    placeholderTextColor='#CCC'
                />
                <JoinButtons />
            </View>
        );
    }
    return (
        <>
            <TextInput style={styles.inputText}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Nome'
                placeholderTextColor='#CCC'
            />
            <TextInput style={styles.inputText}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='E-mail'
                placeholderTextColor='#CCC'
            />
            <TextInput style={styles.inputText}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Telefone'
                placeholderTextColor='#CCC'
            />
            <TextInput style={styles.inputText}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Data de nascimento'
                placeholderTextColor='#CCC'
            />
            <JoinButtons />
        </>
    );
}

export default JoinForm;