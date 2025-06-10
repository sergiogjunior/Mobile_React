import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

import api from './src/services/api';
import Filme from './src/Filmes';

export default function App() {

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function getFilmes() {
      const resposta = await api.get('r-api/?api=filmes');
      setFilmes(resposta.data)
      setLoading(false)

    }
    getFilmes();

  }, []);

  if(loading){
    return(
      <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
        <ActivityIndicator color='#121212' size={60}></ActivityIndicator>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <FlatList data={filmes}
        renderItem={({ item }) => <Filme data={item}></Filme>}>
      </FlatList>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
