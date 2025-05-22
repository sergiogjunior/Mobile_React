// App.js
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Calcular from './src/calcular/calcular.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Calcular />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
