import React, { Component } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      textoFrase:'',
      img: require('./src/biscoito.png'),
      quebrado: false,
    };
    this.frase = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];
    this.QuebraBiscoito = this.QuebraBiscoito.bind(this);
  }
  

  QuebraBiscoito() {
    if (this.state.quebrado) {
      this.setState({
        textoFrase: '',
        img: require('./src/biscoito.png'),
        
      });
    } else {
      let numeroAleatorio = Math.floor(Math.random() * this.frase.length);
      this.setState({
        textoFrase: '" ' + this.frase[numeroAleatorio] + ' "',
        img: require('./src/biscoitoAberto.png'),
        quebrado:true
      });
    }
  }

  render() {
  return (
    <View style={estilos.container}>

      <Image style={estilos.img} source={this.state.img}></Image>

      <Text style={estilos.textoFrase}>{this.state.textoFrase}</Text>

      <TouchableOpacity style={estilos.botao} onPress={this.QuebraBiscoito}>
        <View style={estilos.btnArea}>
          <Text style={estilos.btnTexto}>Quebrar Biscoito?</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  }

};




const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  img:{
    width:250,
    height:250,
  },
  textoFrase:{
    fontSize: 20,
    color:'#dd7b22',
    margin:30,
    textAlign:'center',
    fontStyle:'italic',
  },
  botao:{
    width:250,
    height:50,
    borderWidth:2,
    backgroundColor:'FFFFFF',
    borderRadius:25,
    alignItems:'center',
    borderColor:'#dd7b22'

  },
  btnArea:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  btnTexto:{
    fontSize:20,
    color:'#dd7b22',
    fontWeight:'bold'
  },

});
export default App;