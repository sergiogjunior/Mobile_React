import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer'; 

const Drawer = createDrawerNavigator();

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

export default function Routes() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen
            name="Home"
            component={Home}
       />
       <Drawer.Screen
            name="Sobre"
            component={Sobre}
       />
       <Drawer.Screen
            name="Contato"
            component={Contato}
       />
    </Drawer.Navigator>
  );
}