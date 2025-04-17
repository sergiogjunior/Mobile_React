import { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';



class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topo}>Banco R.N</Text>
        <TextInput  style={styles.input} placeholder='Digite seu nome aqui...'>
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  topo:{
    textAlign: 'center',
    fontSize: 30,
    color:'green',
    marginTop: 30
  },
  input:{
    padding:10,
    height:50,
    borderWidth:1,
    margin:8,
    borderRadius:15,
    borderColor: 'black',
    fontSize: 20,
    backgroundColor:'#fff',
  },
});
export default App;