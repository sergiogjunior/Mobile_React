import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alcool: '',
      gasolina: '',
      resultado: null,
    };
  }

  calcular = () => {
    const precoAlcool = parseFloat(this.state.alcool.replace(',', '.'));
    const precoGasolina = parseFloat(this.state.gasolina.replace(',', '.'));

    if (!isNaN(precoAlcool) && !isNaN(precoGasolina)) {
      const proporcao = precoAlcool / precoGasolina;
      if (proporcao < 0.7) {
        this.setState({ resultado: 'alcool' });
      } else {
        this.setState({ resultado: 'gasolina' });
      }
    }
  };

  resetar = () => {
    this.setState({ alcool: '', gasolina: '', resultado: null });
  };

  render() {
    const { alcool, gasolina, resultado } = this.state;

    if (resultado) {
      const isAlcool = resultado === 'alcool';
      return (
        <View style={[styles.resultadoContainer, { backgroundColor: isAlcool ? '#2ecc71' : '#f39c12' }]}> 
          <Text style={styles.resultadoTitulo}>{isAlcool ? 'Álcool' : 'Gasolina'}</Text>
          <Text style={styles.resultadoTexto}>
            Compensa abastecer com {isAlcool ? 'álcool' : 'gasolina'}!
          </Text>
          <TouchableOpacity style={styles.botao} onPress={this.resetar}>
            <Text style={styles.botaoTexto}>Novo Calculo</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Image source={require('./src/img/Eco_Fuel.png')} style={styles.logoImagem} />
        <Text style={styles.logoTexto}>EcoFuel</Text>

        <TextInput
          style={styles.input}
          placeholder="Preço do álcool"
          keyboardType="numeric"
          value={alcool}
          onChangeText={(valor) => this.setState({ alcool: valor })}
        />

        <TextInput
          style={styles.input}
          placeholder="Preço da gasolina"
          keyboardType="numeric"
          value={gasolina}
          onChangeText={(valor) => this.setState({ gasolina: valor })}
        />

        <TouchableOpacity style={styles.botao} onPress={this.calcular}>
          <Text style={styles.botaoTexto}>Calcular</Text>
        </TouchableOpacity>
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
    padding: 20,
  },
  logoImagem: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  logoTexto: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2c3e50',
  },
  input: {
    width: '100%',
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 18,
  },
  botao: {
    backgroundColor: '#bdc3c7',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  botaoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  resultadoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  resultadoTitulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  resultadoTexto: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 30,
  },
});

export default App;