import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CepInfo({ data }) {
  if (!data || data.erro) {
    return null; // Não renderiza se não houver dados ou houver erro
  }

  return (
    <View style={estilos.conteiner}>
      {/* Exibe as informações do CEP */}
      <Text style={estilos.linhaTexto}><Text style={estilos.rotulo}>CEP:</Text> <Text style={estilos.valor}>{data.cep}</Text></Text>
      <Text style={estilos.linhaTexto}><Text style={estilos.rotulo}>Logradouro:</Text> <Text style={estilos.valor}>{data.logradouro}</Text></Text>
      <Text style={estilos.linhaTexto}><Text style={estilos.rotulo}>Bairro:</Text> <Text style={estilos.valor}>{data.bairro}</Text></Text>
      <Text style={estilos.linhaTexto}><Text style={estilos.rotulo}>Cidade:</Text> <Text style={estilos.valor}>{data.localidade}</Text></Text>
      <Text style={estilos.linhaTexto}><Text style={estilos.rotulo}>Estado:</Text> <Text style={estilos.valor}>{data.uf}</Text></Text>
      <Text style={estilos.linhaTexto}><Text style={estilos.rotulo}>DDD:</Text> <Text style={estilos.valor}>{data.ddd}</Text></Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  conteiner: {
    width: '88%',
    backgroundColor: '#282828', 
    borderRadius: 10,
    padding: 25,
    alignItems: 'flex-start',
    borderWidth: 1.5,
    borderColor: '#444444', 
    marginTop: 20,
  },
  linhaTexto: {
    fontSize: 17,
    marginBottom: 8,
    color: '#F0F0F0',
  },
  rotulo: {
    fontWeight: '600',
    color: '#FFFFFF', 
    marginRight: 5,
  },
  valor: {
    fontWeight: 'bold',
    color: '#BBBBBB', 
  },
});