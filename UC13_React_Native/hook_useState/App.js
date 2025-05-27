import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';




export default function App() {

  const[nome, setNome] = useState('Sergio');

  return (
    <View style={styles.container}>

      <Text>{nome}</Text>
      <TextInput placeholder='Digite seu nome:' ></TextInput>

      <TouchableOpacity onPress={(nome)}>
      <Text>botão</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
