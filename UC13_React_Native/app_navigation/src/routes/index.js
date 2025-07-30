import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import StackRoutes from './stackRoutes'; 
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'blue',
        tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackRoutes} 
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="info" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="phone" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
