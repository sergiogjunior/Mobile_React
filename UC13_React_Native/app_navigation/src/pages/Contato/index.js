import { View,Text, TextInput, StyleSheet } from "react-native";

export default function Contato(){
    return(
        <View style={styles.container}>
            <Text>
                Contato
            </Text>
            <TextInput style={styles.TextInput}>

            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        width: '70%',
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 18,
        color: '#333',
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#6128FF',
        elevation: 4,
        marginTop: 20,
    },
});
