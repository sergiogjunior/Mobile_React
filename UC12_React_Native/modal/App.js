import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import Entrar from './src/Entrar'; 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }
 
  entrar () {
    this.setState({ modalVisible: true });
  }

  sair (visible) {
    this.setState({ modalVisible: visible });
  }
 
  render() {
    return (
      <View style={styles.container}>
 
        <Button title="Entrar" onPress={this.entrar}></Button>
 
        <Modal visible={this.state.modalVisible} animationType="fade">
          <View>
            <Entrar fechar={()=>this.sair(false)}></Entrar>
          </View>
        </Modal>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});