import { cloneElement, useEffect , useState} from 'react';
import { StyleSheet, Text, View , } from 'react-native';

 
import { FormUser } from './src/formUser';


export default function App() {

  return (
 
    <View style={styles.container}>
     <FormUser></FormUser>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});