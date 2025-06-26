import React,{useLayoutEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation ,StackActions, useRoute } from '@react-navigation/native';
 
 
 
export default function Contato() {
 
    const navigation = useNavigation();
    const route = useRoute();
 
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:route.params?.nome === '' ? 'Pagina de Contato sem login' : route.params?.nome
        })
    },[])
 
    function handleHome(){
        navigation.dispatch(StackActions.popToTop());
    }
 
 
 
  return (
 
 
    <View style={styles.container}>
 
      <Text>Pagina Contato</Text>
 
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
 
 
      <Button title='Ir para Home' onPress={handleHome}></Button>
      <Button title='Voltar' onPress={()=> navigation.goBack()}></Button>
 
     
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