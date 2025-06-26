import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation ,StackActions } from '@react-navigation/native';
 
 
 
export default function Sobre() {
 
    const navigation = useNavigation();
  return (
 
 
    <View style={styles.container}>
 
      <Text>Pagina Sobre</Text>
      <TouchableOpacity>
      <Button title='Ir para Contato' onPress={()=>navigation.navigate('Contato')}>   </Button>
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
 
  button:{
    backgroundColor:'#fff'
  }
 
 
 
 
});