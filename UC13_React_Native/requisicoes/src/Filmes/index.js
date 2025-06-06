import React, { useState } from "react";

import { Text, View, Image, StyleSheet, TouchableOpacity, Modal } from "react-native";


export default function Filmes({ data }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>
                <Image style={styles.capa} source={{ uri: data.foto }}></Image>
            </View>

            <View style={styles.areaBotao}>
                <TouchableOpacity style={styles.botao} onPress={() => setModalVisible(true)}>
                    <Text style={styles.textoBotao}>Ver mais</Text>
                </TouchableOpacity>
            </View>

            <Modal animationType="slide" visible={modalVisible} transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalConteudo}>
                        <Text style={styles.titulo}>{data.nome}</Text>
                        <Text style={styles.sinopse}>{data.sinopse}</Text>

                        <TouchableOpacity style={styles.botao} onPress={() => setModalVisible(false)}>
                            <Text style={styles.textoBotao}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#a6a6a6',
        margin: 15,
        elevation: 2,
        borderRadius: 10
    },
    capa: {
        height: 250,
        zIndex: 2,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,

    },
    areaBotao: {
        alignItems: 'flex-end',
        marginTop: -45
    },
    botao: {
        width: 100,
        backgroundColor: '#000',
        padding: 5,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        opacity: 0.8
    },
    textoBotao: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center'

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalConteudo: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    sinopse: {
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'center',
    },

});