import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes'; 

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
    }}
    >
        
      <Stack.Screen name="Home" component={Home} options={{ title: 'Início' }} />
      <Stack.Screen name="Detalhes" component={Detalhes} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}
