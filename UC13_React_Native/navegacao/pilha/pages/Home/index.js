import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation ,StackActions } from '@react-navigation/native';
 
 
 
export default function Home() {
 
    const navigation = useNavigation();
 
    function dadosNavega(){
        navigation.navigate('Contato',{nome:'Sérgio', email:'sergiogjunior@hotmail.com'})
    }
 
 
  return (
 
 
    <View style={styles.container}>
 
      <Text>Pagina Home</Text>
      <Button title='Ir para Sobre' onPress={()=>navigation.navigate('Sobre')}>   </Button>
      <Button title='Ir para Contato' onPress={dadosNavega}>   </Button>
 
 
     
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