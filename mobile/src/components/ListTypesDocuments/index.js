import React, { useEffect, useState } from 'react';
import { View, Text, Picker } from 'react-native';

import styles from './styles';
import { useSafeArea } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const ListTypesDocuments = ({ typesList }) => {
    let typeDocumentSelected;
    const insets = useSafeArea();

    const safeAreaStyle = {
        paddingTop: insets.top,
    }

    return (
        <View style={[styles.listWrapper, safeAreaStyle]}>
            <View>
                <Text>Qual o documento que ira adicionar?</Text>
                <Picker>
                    {typesList.map((typeDocument, index) => (
                        <Picker.Item
                            key={index}
                            label={typeDocument.typeName}
                            value={typeDocument.typeName}
                        />
                    ))}
                </Picker>
            </View>

            <View style={styles.buttonsWrapper}>
                <TouchableOpacity>
                    <Text>Volar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ListTypesDocuments