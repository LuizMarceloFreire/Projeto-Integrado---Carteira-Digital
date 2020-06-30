import React, { useEffect, useState } from 'react';
import { View, Text, Picker, StatusBar } from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListTypesDocuments = ({ typesList }) => {
    let [typeDocumentSelected, setTypeDocumentSelected] = useState(typesList[0].typeName);

    const idDocument = typesList.find(
        typeDocument =>
            typeDocument.typeName === typeDocumentSelected
    ).id;

    StatusBar.setBackgroundColor('#42A8EB');

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
                                label={typeDocument.typeName}
                                value={typeDocument.typeName}
                            />
                        ))}
                    </Picker>
                </View>
            </View>

            <View style={styles.buttonsWrapper}>
                <TouchableOpacity
                    style={styles.buttonBack}
                >
                    <Text style={styles.buttonText}>Volar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonGo}
                >
                    <Text style={styles.buttonText} >Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ListTypesDocuments