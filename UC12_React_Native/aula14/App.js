import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Pessoas from './src/Pessoas';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      feed:
        [
        { id: '1', nome: 'Rhuan', idade: '19', email: 'Rhuan@gmail.com' },
        { id: '2', nome: 'Cesar', idade: '19', email: 'Cesar@gmail.com' },
        { id: '3', nome: 'Pedro', idade: '23', email: 'Pedro@gmail.com' },
        { id: '4', nome: 'Kaio', idade: '20', email: 'Kaio@gmail.com' },
        { id: '5', nome: 'Ruan', idade: '23', email: 'Ruan@gmail.com' },
        ]
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.areaFlatlist}>
          <FlatList
            data={this.state.feed}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Pessoas data={item} />}
          />
        </View>
      </View>
    );
  }
}
 

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Pessoa: {
    backgroundColor: 'red',
    height: 250,
    width: 150,
  },
  areaFlatlist: {
    padding: 30,
  },
  Texto: {
    
  }
 
});
 
export default App;