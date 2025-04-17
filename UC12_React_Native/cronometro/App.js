import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      numero:0,
    };
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);

    this.timer = null;


  }
  vai(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;

    } else{
      this.timer = setInterval (()=>{
        this.setState({numero: this.state.numero + 0.1})
      },100);
    }
  }

  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({numero:0,

    })
  }  


  render(){
    return(
        <View style={estilos.container}>
          <Image source={require ('./src/cronometro.png')}></Image>
          <Text style={estilos.timer}>{this.state.numero.toFixed(1)}</Text>
          <View style={estilos.btnArea}>
            <TouchableOpacity style={estilos.btn} onPress={this.vai}>
              <Text style={estilos.btnTexto}>Vai</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.btn} onPress={this.limpar}>
              <Text style={estilos.btnTexto}>Limpar</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FF9500',
  },
  timer:{
    color:'#fff',
    fontSize:65,
    fontWeight:'bold',
    marginTop:'-160',
  },
  btnArea:{
    flexDirection:'row',
    margin:70,
    height:40,
  },
  btn:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
    height:40,
    borderRadius: 10,
    margin: 20,
  },
  btnTexto:{
    fontSize:25,
    fontWeight:'black',
    color:'#FF9500'
  },
});
export default App;
