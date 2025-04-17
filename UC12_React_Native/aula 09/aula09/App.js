import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      nome:'',
      input:''
    };
    this.entrar = this.entrar.bind.apply(this);
  }

  pegaNome(novoNome){
    if(novoNome.length > 0){
      this.setState({nome:'Seja bem vindo, ' + novoNome})
    }else{
      this.setState({nome:''})
    }
  }

  entrar(){
    if(this.state.input === ''){
      return;
    }
    this.setState({nome:'Seja bem vindo: ' + this.state.input})
  }

  render(){
    return(
      <View style={estilos.container}>
        <TextInput style={estilos.input} placeholder='Digite seu nome aqui...'
        onChangeText={(texto)=> this.setState({input:texto})}>
        </TextInput>
        <Text style={estilos.texto}>{this.state.nome}</Text>
        <Button title='Entrar'  onPress={this.entrar}> </Button>
      </View>
    );
  }
}



const estilos = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    backgroundColor: '#999',
  },
  input:{
    padding:10,
    height:50,
    borderWidth:1,
    margin:20,
    borderColor: 'black',
    fontSize: 20,
    backgroundColor:'#fff',
  },
  texto:{
    fontSize:25,
    textAlign:'center'

  }

});
export default App;