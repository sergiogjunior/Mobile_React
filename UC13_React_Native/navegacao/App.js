import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from '@react-native-vector-icons/feather';

export default function App() {
  return (
    <View style={styles.container}>

      <Icon name='home' size={50} color='000'/>
      <Text>Home</Text>

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
