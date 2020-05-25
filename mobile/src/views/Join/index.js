import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import JoinForm from '../../components/JoinForm';

import styles from './styles';

const Join = () => {
    
    return (
        <View style={styles.joinWrapper}>
            <View>
                <Text style={styles.joinTitile}>Cadastre-se</Text>
                <JoinForm />
            </View>

            <Text style={styles.textHelp}>
                Precisa de <Text style={styles.textRed} >Ajuda ?</Text>
            </Text>
        </View>
    )
}


export default Join;