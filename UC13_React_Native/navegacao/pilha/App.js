import React from 'react';

import { NavigationContmainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Sobre from './pages/Sobre';

const Stack = createStackNavigator();

export default function App(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}></Stack.Screen>
      <Stack.Screen name='Sobre' component={Sobre}></Stack.Screen>
    </Stack.Navigator>
      
    
  )
}