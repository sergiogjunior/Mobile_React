// src/calcular/Calcular.js
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  ScrollView
} from 'react-native';

export default class Calcular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alcool: '',
      gasolina: '',
      resultado: '',
      modalVisivel: false
    };
  }

  calcular = () => {
    let a = this.state.alcool.replace(',', '.');
    let g = this.state.gasolina.replace(',', '.');

    if (a !== '' && g !== '') {
      let valorAlcool = Number(a);
      let valorGasolina = Number(g);

      if (valorAlcool > 0 && valorGasolina > 0) {
        let proporcao = valorAlcool / valorGasolina;
        let resultado = proporcao < 0.7 ? 'Álcool' : 'Gasolina';
        this.setState({ resultado, modalVisivel: true });
      }
    }
  };

  fecharModal = () => {
    this.setState({
      alcool: '',
      gasolina: '',
      resultado: '',
      modalVisivel: false
    });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={require('../img/Eco_Fuel.png')}
          style={styles.logoImagem}
        />
        <Text style={styles.logoTexto}>EcoFuel</Text>

        <TextInput
          style={styles.input}
          placeholder="Preço do álcool"
          keyboardType="numeric"
          value={this.state.alcool}
          onChangeText={(text) => this.setState({ alcool: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Preço da gasolina"
          keyboardType="numeric"
          value={this.state.gasolina}
          onChangeText={(text) => this.setState({ gasolina: text })}
        />

        <TouchableOpacity style={styles.botao} onPress={this.calcular}>
          <Text style={styles.botaoTexto}>Calcular</Text>
        </TouchableOpacity>

        {this.state.modalVisivel && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisivel}
            onRequestClose={this.fecharModal}
          >
            <View style={styles.modalFundo}>
              <View style={styles.modalContainer}>
                <Text
                  style={[
                    styles.resultadoTitulo,
                    {
                      color:
                        this.state.resultado === 'Álcool'
                          ? '#2ecc71'
                          : '#f39c12'
                    }
                  ]}
                >
                  {this.state.resultado}
                </Text>
                <Text style={styles.resultadoTexto}>
                  Compensa abastecer com {this.state.resultado}!
                </Text>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={this.fecharModal}
                >
                  <Text style={styles.botaoTexto}>Calcular Novamente</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
  },
  logoImagem: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoTexto: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#2c3e50',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 6,
    width: '80%',
    alignItems: 'center',
  },
  resultadoTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultadoTexto: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
}); 