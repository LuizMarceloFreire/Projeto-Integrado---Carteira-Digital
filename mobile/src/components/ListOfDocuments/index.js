import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const ListItem = ({ documentType }) => {
    return (
        <View style={styles.listItem}>
            <View style={styles.listItemDocumentType}>
                <Text style={styles.listItemDocumentTypeText}>{documentType}</Text>
            </View>
        </View>
    )
}

const ListOfDocuments = ({ documents }) => {
    return (
        <View style={styles.listWrapper}>
            <Text style={styles.listTitle}>Meus Documentos</Text>
            <View style={styles.list}>
                {
                    documents.map((oneDocument, index) => (
                        <ListItem key={index} documentType={oneDocument.tipo} />
                    ))
                }
            </View>
        </View>
    )

}

export default ListOfDocuments;