import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class BankApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: '',
      limite: 0,
      estudante: false
    };
  }

  abrirConta = () => {
    const { nome, idade, sexo, limite, estudante } = this.state;

    if (nome === '' || idade === '' || sexo === '') {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    Alert.alert(
      'Conta Criada!',
      `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nLimite: R$ ${limite.toFixed(2)}\nEstudante: ${estudante ? 'Sim' : 'Não'}`
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Banco RN</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          onChangeText={(text) => this.setState({ nome: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Idade"
          keyboardType="numeric"
          onChangeText={(text) => this.setState({ idade: text })}
        />

        <Text style={styles.label}>Sexo:</Text>
        <Picker
          selectedValue={this.state.sexo}
          onValueChange={(value) => this.setState({ sexo: value })}
          style={styles.picker}
        >
          <Picker.Item label="Selecione..." value="" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Outro" value="Outro" />
        </Picker>

        <Text style={styles.label}>Limite: R$ {this.state.limite.toFixed(2)}</Text>
        <Slider
          minimumValue={0}
          maximumValue={5000}
          step={100}
          value={this.state.limite}
          onValueChange={(value) => this.setState({ limite: value })}
        />

        <View style={styles.switchArea}>
          <Text style={styles.label}>Estudante:</Text>
          <Switch
            value={this.state.estudante}
            onValueChange={(value) => this.setState({ estudante: value })}
          />
        </View>

        <Button title="Abrir Conta" onPress={this.abrirConta} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    padding: 20
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2E7D32',
    marginBottom: 30
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#333'
  },
  picker: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    height: 50
  },
  switchArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1
  },
  button: {
    backgroundColor: '#2E7D32',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default BankApp;