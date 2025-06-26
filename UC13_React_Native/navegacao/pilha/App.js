import 'react-native-gesture-handler';
import { StyleSheet, Text,View } from 'react-native';
 
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
 
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
 
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
 
        <Stack.Screen name="Home" component={Home}
        options={{
          title:'Tela Inicio',
          headerStyle:{
            backgroundColor:'#121212'
          },
          headerTintColor:'#fff'
        }}
 
 
        ></Stack.Screen>
 
      <Stack.Screen  name="Sobre" component={Sobre}
        options={{
          title:'Tela Sobre',
          headerStyle:{
            backgroundColor:'#121212'
          },
          headerTintColor:'#fff'
        }}
></Stack.Screen>
 
 
      <Stack.Screen name="Contato" component={Contato}
        options={{
          title:'Tela Contato',
          headerStyle:{
            backgroundColor:'#121212'
          },
          headerTintColor:'#fff'
        }}
 
></Stack.Screen>
 
      </Stack.Navigator>
 
 
    </NavigationContainer>
 
 
  )
 
}