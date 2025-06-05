import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import api from './src/services/api';

export default function App() {

  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{

    async function getFilmes() {
      const resposta = await api.get('r-api/?api=filmes');
      setFilmes(resposta.data)
      
    }
getFilmes();

  },[]);



  return (
    <View style={styles.container}>

      <Text>Filmes</Text>
      
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
