import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
 
export default class Entrar extends Component {
  
  render() {
    return (

          <View style={styles.modalview}>
            <Text >Seja Bem-Vindo</Text>
            <Button title="Fechar" onPress={this.props.fechar}></Button>
          </View>
    );
  }
}
 
const styles = StyleSheet.create({

  modalview: {
    backgroundColor: '#292929',
    width: '100%',
    height: 350,
    borderRadius: 15,
    color: '#fff',
  },
});