import { View, Text, StyleSheet, } from "react-native";

export default function Detalhes(){
    return(
        <View style={styles.container}>
            <Text>
                Home
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
