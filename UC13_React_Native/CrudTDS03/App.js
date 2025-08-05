import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { db } from './src/firebaseConnection';
import { collection, addDoc } from 'firebase/firestore';
 
export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cargo, setCargo] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
 
  async function handlerRegister() {
    if (nome === '' || idade === '' || cargo === '') {
      Alert.alert('Atenção', 'Preencha todos os campos antes de enviar.');
      return;
    }
 
    try {
      await addDoc(collection(db, 'users'), {
        Nome: nome,
        Idade: idade,
        Cargo: cargo,
      });
 
      
      setNome('');
      setIdade('');
      setCargo('');
 
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
    } catch (error) {
      console.log('Erro ao cadastrar: ', error);
      Alert.alert('Erro', 'Não foi possível cadastrar. Tente novamente.');
    }
  }
 
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setMostrarFormulario(!mostrarFormulario)}
      >
        <Text style={styles.toggleButtonText}>
          {mostrarFormulario ? 'Ocultar Formulário' : 'Mostrar Formulário'}
        </Text>
      </TouchableOpacity>
 
      {mostrarFormulario && (
        <>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu Nome'
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
 
          <Text style={styles.label}>Idade:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite sua Idade'
            value={idade}
            onChangeText={(text) => setIdade(text)}
            keyboardType='numeric'
          />
 
          <Text style={styles.label}>Cargo:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu Cargo'
            value={cargo}
            onChangeText={(text) => setCargo(text)}
          />
 
          <TouchableOpacity style={styles.botao} onPress={handlerRegister}>
            <Text style={styles.textoBtn}>Adicionar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  toggleButton: {
    backgroundColor: '#555',
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
  },
  toggleButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#000',
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  textoBtn: {
    padding: 10,
    color: '#fff',
    textAlign: 'center',
  },
  label: {
    color: '#000',
    fontSize: 18,
    marginBottom: 4,
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
  },
});
 