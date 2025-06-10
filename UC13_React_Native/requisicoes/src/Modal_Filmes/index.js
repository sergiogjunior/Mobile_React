import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Modal_Filmes({ filme, voltar }) {
    return (
        <View style={styles.container}>
            <View style={styles.modalContent}>
                <Text style={styles.titulo}>{filme.nome}</Text>
                <Text style={styles.sinopseTitulo}>Sinopse:</Text>
                <Text style={styles.sinopse}>{filme.sinopse}</Text>
                <TouchableOpacity style={styles.botaoVoltar} onPress={voltar}>
                    <Text style={styles.textoVoltar}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    modalContent: {
        backgroundColor: '#FFF',
        width: '90%',
        padding: 20,
        borderRadius: 10,
        elevation: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        color: '#000',
    },
    sinopseTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    sinopse: {
        fontSize: 14,
        color: '#333',
        marginBottom: 20,
        textAlign: 'justify'
    },
    botaoVoltar: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    textoVoltar: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
});