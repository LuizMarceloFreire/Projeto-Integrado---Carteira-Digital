import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const NeedHelp = () => {
    return (
        <Text style={styles.textHelp}>
            Precisa de <Text style={styles.textRed} >Ajuda ?</Text>
        </Text>
    );
}

export default NeedHelp;

