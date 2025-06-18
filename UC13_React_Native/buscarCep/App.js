import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator, // Indicador de carregamento
} from 'react-native';

import api from './src/services/api'; // Conexão com a API ViaCEP
import CepInfo from './src/componentes/CepInfo'; // Componente para exibir dados do CEP

export default function App() {
  const [cepInput, setCepInput] = useState(''); // Estado para o input do CEP
  const [cepData, setCepData] = useState(null); // Estado para os dados do CEP
  const [loading, setLoading] = useState(false); // Estado para controlar o loading

  const inputRef = useRef(null); // Referência para o campo de input

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Foca no input ao iniciar o app
    }
  }, []);

  async function busca() {
    if (cepInput.trim() === '') {
      Alert.alert('Atenção', 'Digite um CEP!');
      return;
    }

    setLoading(true); // Ativa o loading

    const limpaCep = cepInput.replace(/[^0-9]/g, ''); // Limpa o CEP

    if (limpaCep.length !== 8) {
      Alert.alert('Atenção', 'O CEP deve ter 8 dígitos numéricos.');
      setLoading(false); // Desativa o loading se inválido
      return;
    }

    try {
      const response = await api.get(`/${limpaCep}/json/`); // Busca na API
      
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
    } finally {
      setLoading(false); // Desativa o loading sempre
    }
  }

  function limpa() {
    setCepInput(''); // Limpa o input
    setCepData(null); // Limpa os dados
    if (inputRef.current) {
      inputRef.current.focus(); // Foca no input
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
        <TouchableOpacity 
          style={estilos.botaoBuscar} 
          onPress={busca} 
          activeOpacity={0.7}
          disabled={loading} // Desabilita botão durante o loading
        >
          {loading ? (
            <ActivityIndicator size="small" color="#1E1E1E" /> // Mostra loading
          ) : (
            <Text style={estilos.textoBotao}>Buscar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          style={estilos.botaoLimpar} 
          onPress={limpa} 
          activeOpacity={0.7}
          disabled={loading} // Desabilita botão durante o loading
        >
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
    marginRight: 10,
  },
  botaoLimpar: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FF7043', 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  textoBotao: {
    color: '#1E1E1E',
    fontSize: 18,
    fontWeight: '600',
  },
});