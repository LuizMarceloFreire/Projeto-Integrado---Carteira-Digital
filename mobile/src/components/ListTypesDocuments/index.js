import React, { useState } from 'react';
import { View, Text, Picker, StatusBar } from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';

const ListTypesDocuments = ({ typesList, onTypeDocumentChoosed, onPressBack }) => {
    let [typeDocumentSelected, setTypeDocumentSelected] = useState(typesList[0].tipo);

    useFocusEffect(() => {
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor('#42ABEB');
    }, []);


    const { id, temVerso } = typesList.find(
        typeDocument =>
            typeDocument.tipo === typeDocumentSelected
    );

    return (
        <View style={styles.listWrapper}>
            <View>
                <Text style={styles.title} >Qual o documento que ira adicionar?</Text>
                <View style={styles.pickerBorder}>
                    <Picker
                        style={styles.picker}
                        selectedValue={typeDocumentSelected}
                        onValueChange={newTypeSelected => {
                            setTypeDocumentSelected(newTypeSelected);
                        }}
                    >
                        {typesList.map((typeDocument, index) => (
                            <Picker.Item
                                key={index}
                                label={typeDocument.tipo}
                                value={typeDocument.tipo}
                            />
                        ))}
                    </Picker>
                </View>
            </View>

            <View style={styles.buttonsWrapper}>
                <TouchableOpacity
                    style={styles.buttonBack}
                    onPress={onPressBack}
                >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonGo}
                    onPress={() => onTypeDocumentChoosed({
                        typeDocumentId: id,
                        hasVerse: temVerso,

                    })}
                >
                    <Text style={styles.buttonText} >Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ListTypesDocuments