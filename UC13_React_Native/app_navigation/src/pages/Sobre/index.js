import { View, Text, StyleSheet, } from "react-native";

export default function Sobre(){
    return(
        <View style={styles.container}>
            <Text>
                Sobre
            </Text>
        
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
});
