import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListItem = ({ documentType, navigation, documentId }) => {
    return (

        <View style={styles.listItem}>
            <TouchableOpacity
                onPress={() => navigation.navigate('ShowDocument', {
                    documentId
                })}
            >
                <View style={styles.listItemDocumentType}>
                    <Text style={styles.listItemDocumentTypeText}>{documentType}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const ListOfDocuments = ({ documents, navigation }) => {
    return (
        <View style={styles.listWrapper}>
            <Text style={styles.listTitle}>Meus Documentos</Text>
            <View style={styles.list}>
                {
                    documents.map((oneDocument, index) => (
                        <ListItem
                            key={index}
                            documentType={oneDocument.tipo}
                            navigation={navigation}
                            documentId={oneDocument.id}
                        />
                    ))
                }
            </View>
        </View>
    )

}

export default ListOfDocuments;