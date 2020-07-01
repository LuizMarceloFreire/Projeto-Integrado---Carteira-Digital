import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import JoinForm from '../../components/JoinForm';

import styles from './styles';
import NeedHelp from '../../components/NeedHelp';
import { useFocusEffect } from '@react-navigation/native';

const Join = ({ navigation }) => {
    useFocusEffect(() => {
        StatusBar.setBackgroundColor('white');
    }, []);
    return (
        <View style={styles.joinWrapper}>
            <View>
                <Text style={styles.joinTitile}>Cadastre-se</Text>
                <JoinForm navigation={navigation} />
            </View>

            <NeedHelp />
        </View>
    )
}


export default Join;