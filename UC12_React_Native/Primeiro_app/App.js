import React, { Component } from 'react';
import {View,Text, Image, StyleSheet} from 'react-native';

/*class App extends Component{
  render(){ 
    let nome = 'Sergio Junior'
    let imagem = 'https://d1muf25xaso8hp.cloudfront.net/https://img.criativodahora.com.br/2024/05/criativo-6637cdb4edafdimg-2024-05-056637cdb4edb016637cdb4edb02.jpeg?w=1000&h=&auto=compress&dpr=1&fit=max'
    let profissao = 'Aluno'
    return(
      <View>

        <Text style={{ marginTop: 50, fontSize: 25, color: '#ff00ff', textAlign: 'center'}}>
          {nome}
        </Text>
           
        <Image
        source={{uri:imagem}}
        style={{width: 400, height: 500, marginTop: 50}}></Image>

        <Text style={{ marginTop: 5, fontSize: 25, color: '#ff00ff', textAlign: 'center'}}>{profissao}</Text>

      </View>

      
      
    );
  }
}
export default App;

class App extends Component{
  render(){
    nome = 'Sergio Junior'
    return(
      <View>
        <Text style ={{marginTop:40,fontSize:25,color:'#0000ff',textAlign:'center',marginTop:50}}>{nome}</Text>
        <Foto largura= {400} altura={600}  profissao='Aluno' imagem='https://d1muf25xaso8hp.cloudfront.net/https://img.criativodahora.com.br/2024/05/criativo-6637cdb4edafdimg-2024-05-056637cdb4edb016637cdb4edb02.jpeg?w=1000&h=&auto=compress&dpr=1&fit=max'></Foto>
      </View>
    );
  }
}
export default App;
 
class Foto extends Component {
  render (){
    return(
      <View>
        <Image source={{uri:this.props.imagem}}
        style={{width: this.props.largura, height: this.props.altura, marginTop:20}}></Image>
        <Text>{this.props.profissao}</Text>
      </View> 
    );
  }
}
*/

class App extends Component{
  render(){
    return(
    <View style = {estilos.area} >
      <View style={estilos.box1}>
      <Text style = {estilos.textoPrincipal}>Texto 1</Text>
      </View>

      <View style={estilos.box2}>
      <Text style = {estilos.alinharTexto}>Texto 2</Text>
      </View>

      <View style={estilos.box3}>
      <Text style = {[estilos.textoPrincipal, estilos.alinharTexto]}>Texto 3</Text>
      </View>

      
    </View>
    );
  }
}

const estilos = StyleSheet.create({
  area:{
    flex:1,
    marginTop: 40,
    backgroundColor:'#999',
    padding: 25,
    flexDirection:'column',
    alignItems:'center'
  },
  textoPrincipal:{
    fontSize:25,
    color:'pink'
  },
  alinharTexto:{
    textAlign:'center'
  },
  box1:{
    width:'150',
    height:'150',
    flex:1,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
  },
  box2:{
    width:'150',
    height:'150',
    flex:1,
    backgroundColor:'green',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  box3:{
    width:'150',
    height:'150',
    flex:1,
    backgroundColor:'blue',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  }
});
export default App;