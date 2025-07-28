import { react } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={{
          headerShown:false,
          tabBarHideOnKeyboard:true,
          tabBarShowLabel:false,
          tabBarActiveTintColor:'#fff',

          tabBarStyle:{
            backgroundColor:'#000',
            borderTopWidth:0
          }
        }}
      >
      <Tab.Screen
       name="Home"
       component={Home}
       options={{ tabBarLabel:'Inicio', tabBarIcon: ({color}) => <Feather name="home" size={20} color={color} />}}
       />
        <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{tabBarIcon: ({color}) => <Feather name="info" size={20} color={color} />}}
        />
        <Tab.Screen
        name="Contato"
        component={Contato}
        options={{tabBarIcon: ({color}) => <Feather name="phone" size={20} color={color} />}}
        />  
      </Tab.Navigator>

    </NavigationContainer>
  );
}
