import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import api from './src/services/api';
import CepInfo from './src/componentes/CepInfo';

export default function App() {
  const [cepInput, setCepInput] = useState('');
  const [cepData, setCepData] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  async function busca() {
    if (cepInput.trim() === '') {
      Alert.alert('Atenção', 'Digite um CEP!');
      return;
    }

    const limpaCep = cepInput.replace(/[^0-9]/g, '');

    if (limpaCep.length !== 8) {
      Alert.alert('Atenção', 'O CEP deve ter 8 dígitos numéricos.');
      return;
    }

    try {
      const response = await api.get(`/${limpaCep}/json/`);
      
      if (response.data.erro) {
        Alert.alert('Erro', 'CEP não encontrado.');
        setCepData(null); 
      } else {
        setCepData(response.data); 
      }
      
      setCepInput('');

    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Falha ao buscar CEP. tente novamente.');
      setCepData(null); 
    }
  }

  function busca() {
    setCepInput('');
    setCepData(null);
    

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <View style={estilos.conteiner}>
      <Text style={estilos.titulo}>BUSCADOR DE CEP</Text>

      <TextInput
        style={estilos.campoTexto}
        value={cepInput}
        onChangeText={setCepInput}
        keyboardType="numeric"
        maxLength={8}
        placeholder="Digite o CEP"
        placeholderTextColor="#BBBBBB" 
        ref={inputRef}
      />

      <View style={estilos.areaBotoes}>
        <TouchableOpacity style={estilos.botaoBuscar} onPress={busca} activeOpacity={0.7}>
          <Text style={estilos.textoBotao}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoLimpar} onPress={busca} activeOpacity={0.7}>
          <Text style={estilos.textoBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepData && <CepInfo data={cepData} />}
    </View>
  );
}

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#1E1E1E', 
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF', 
    marginBottom: 35,
  },
  campoTexto: {
    width: '88%',
    height: 55,
    backgroundColor: '#282828', 
    borderRadius: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#F0F0F0', 
    borderWidth: 1.5,
    borderColor: '#444444', 
    marginBottom: 25,
  },
  areaBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '88%',
    marginBottom: 40,
  },
  botaoBuscar: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#64B5F6', 
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  botaoLimpar: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FF7043', 
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textoBotao: {
    color: '#1E1E1E',
    fontSize: 18,
    fontWeight: '600',
  },
});