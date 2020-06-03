import React from 'react';
import { View, Text } from 'react-native';

import JoinForm from '../../components/JoinForm';

import styles from './styles';
import NeedHelp from '../../components/NeedHelp';

const Join = ({ navigation }) => {
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