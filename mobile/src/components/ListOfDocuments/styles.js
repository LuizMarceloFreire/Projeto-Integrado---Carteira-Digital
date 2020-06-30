import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listWrapper: {
        padding: 8,
    },

    listTitle: {
        fontSize: 28,
    },

    list: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    listItem: {
        width: '33.3%',
        alignItems: 'center',
        marginBottom: 10,
    },

    listItemDocumentType: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },

    listItemDocumentTypeText: {
        fontSize: 18
    },
});

export default styles;