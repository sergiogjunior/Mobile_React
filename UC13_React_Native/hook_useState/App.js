import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');
  const [bemVindo, setBemvindo] = useState('Seja Bem Vindo!');
  const [entrar, setEntrar] = useState('Entrar');
  const [userLog, setuserLog] = useState('');

  const senhaInput = useRef(null);


  useEffect(() => {

    async function getStorage() {

      const nomeStorage = await AsyncStorage.getItem('nome');
      if (nomeStorage !== null) {
        setuserLog(nomeStorage)
      }

    }
    getStorage();
  }, []);


  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('nomes', userLog);
    }
    if (nome !== '') {
      saveStorage();
    }
  }, [nome]);


  const letrasNome = useMemo(() => {
    return userLog.length;
  }, [userLog])


  function alterarNome() {

    if (input === "" && entrar === 'Entrar') {
      alert('Digite o seu Nome');
      return
    }
    else if (entrar === 'Sair') {
      setNome('');
      setInput('');
      setEntrar('Entrar')
      return
    }

    setuserLog(input);
    setNome(input);
    setInput('');
    setEntrar('Sair')

  }
  return (
    <View style={styles.container}>
      <Text>{userLog ? "Usuario logado: " + userLog : ""}</Text>
      <Text>{userLog ? "Seu nome contem: " + letrasNome : ""}</Text>
      <Text style={styles.texto}>{nome ? "Seja bem Vindo! " + nome : ""}</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome..."
        value={input}
        onChangeText={texto => setInput(texto)}
      />

      <TouchableOpacity style={styles.botao} onPress={alterarNome} >
        <Text style={styles.botaoTexto} >{entrar}</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '60%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  botao: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

                                                                                                                                              