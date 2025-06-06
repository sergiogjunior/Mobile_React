import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import api from './src/services/api';
import Filme from './src/Filmes';

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

      <FlatList data={filmes}
        renderItem={({item})=><Filme data={item}></Filme>}>
      </FlatList>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
