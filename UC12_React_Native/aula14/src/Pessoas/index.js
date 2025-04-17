import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

class Pessoas extends Component {
    render() {
      return (
            <View style={styles.areaPessoa}>
                <View style={styles.textoCabecalho}>
                    <Text style={styles.textoPessoa}>Seja Bem Vindo!</Text>
                </View>

                <Text style={styles.Texto}>Nome: {this.props.data.nome} </Text>
                <Text style={styles.Texto}>Idade: {this.props.data.idade}  </Text>
                <Text style={styles.Texto}>Email: {this.props.data.email}  </Text>
            </View>
      )
    }
  }

  const styles = StyleSheet.create({
    areaPessoa: {
      backgroundColor: '#222',
      height: 200,
      marginBottom: 15,
    },
    areaFlatlist: {
      padding: 30,
    },
    textoPessoa: {
   
    },

   
  });
   
  export default Pessoas;