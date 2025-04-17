import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';

/*
class App extends Component{
  render(){
    nome = 'Coringão'
    return(
      <ScrollView>
      <View>
        <Text style ={{marginTop:40,fontSize:25,color:'#000000',textAlign:'center',marginTop:50}}>{nome}</Text>
        <Foto largura= {400} altura={250}  noticia='No dia 4 de julho de 2012, o Corinthians venceu o Boca Jrs, da Argentina, por 2×0 na final da Libertadores. Os dois gols marcados por Émerson Sheik deram o título inédito e invicto ao Timão. A data histórica para os alvinegros também se estendeu até o dia 5, quando jornais e portais on-line de vários países noticiaram a conquista da América.' imagem='https://e.imguol.com/posters/futebol/libertadores-2012/libertadores2012-corinthians-1920x1200.jpg'></Foto>

        <Foto largura= {400} altura={250} noticia='Em 2012, o Corinthians conquistou o seu tão sonhado título mundial ao vencer o Chelsea por 2 a 1 na final do Mundial de Clubes da FIFA, realizada no Japão. Com gols de Paolo Guerrero, o time de Tite fez história e se tornou campeão, consagrando-se como uma das maiores equipes do futebol mundial. Foi a primeira vez que o clube levantou o troféu da competição, marcando um momento inesquecível para sua torcida.'
        imagem='https://i.ytimg.com/vi/VMmiVZ5I0jM/maxresdefault.jpg'></Foto>
      </View>
      </ScrollView>
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
        <Text style = {{fontSize:13}}>{this.props.noticia}</Text>
      </View> 
      
    );
  }
}
*/

/*class App extends Component{

  constructor(props){
    super(props)
    this.state={nome:'Sergin do mel'}
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(nome){
    this.setState({nome:nome})
  }

  render(){ 
    return(
      <View>
        <Text style={{ marginTop: 50, fontSize: 25, color: '#000000', textAlign: 'center'}}>
          {this.state.nome}
        </Text>
        <Button title='Entrar' onPress={() => this.entrar('Juninho do Ceu')}></Button>
        <Text style ={{marginTop:50}}></Text>
        <Button title='Entrar2' onPress={ () => this.entrar('Juninho do Mel')} ></Button>
      </View>      
    );
  }
}
export default App;
*/

class App extends Component{

  constructor(props){
    super(props)
    this.state={texto:'',imagem:'',noticia:''}
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(texto,imagem,noticia){
    this.setState({texto: texto, imagem:imagem, noticia:noticia});
  }

  render(){ 
    return(

      <View>
      
      <View style={[estilos.barra]}>
        <Text style={[estilos.texto]}>Meu Timão</Text>
      </View>

      <ScrollView>

      <View style={estilos.area}>

      <View>
        <Noticia texto={'Libertadores 2012'} imagem={'https://e.imguol.com/posters/futebol/libertadores-2012/libertadores2012-corinthians-1920x1200.jpg'} noticia={'No dia 4 de julho de 2012, o Corinthians venceu o Boca Jrs, da Argentina, por 2×0 na final da Libertadores. Os dois gols marcados por Émerson Sheik deram o título inédito e invicto ao Timão. A data histórica para os alvinegros também se estendeu até o dia 5, quando jornais e portais on-line de vários países noticiaram a conquista da América.'} />
      </View>

      <View>
        <Noticia texto={'Mundial de clubes 2012'} imagem={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_l1FiesVgIq4vwo8UuUrN_KKuQ3OapwVhg&s'} noticia={'Em 2012, o Corinthians conquistou o seu tão sonhado título mundial ao vencer o Chelsea por 1 a 0 na final do Mundial de Clubes da FIFA, realizada no Japão. Com gol de Paolo Guerrero, o time de Tite fez história e se tornou campeão, consagrando-se como uma das maiores equipes do futebol mundial. Foi a segunda vez que o clube levantou o troféu da competição, marcando um momento inesquecível para sua torcida.'}/>
      </View>

      <View>
        <Noticia texto={'Recopa 2013'} imagem={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNLwXO4tBWKef1c3ZhJXM8KLnmZND6dge_g&s'} noticia={'A Recopa Sudamericana de 2013 foi conquistada pelo Corinthians após vencer o São Paulo. A disputa foi acirrada, com o primeiro jogo em São Paulo terminando em 2 a 1 para o Timão. Na partida de volta, realizada no Morumbi, o Corinthians empatou por 2 a 2, garantindo o título com um agregado de 4 a 3. A conquista confirmou a superioridade do time alvinegro no cenário internacional, logo após o título do Mundial de Clubes de 2012.'} />

      </View>

      </View>   
      </ScrollView>   
      </View>
    );
  }

  
}

class Noticia extends Component {
  render (){
    return(
      <View>
        <Text style={estilos.titulo}>
          {this.props.texto}
        </Text>
        <Image style={estilos.foto} source={{uri:this.props.imagem}}></Image>
        <Text style={estilos.noticias}>
          {this.props.noticia}
        </Text>
      </View> 
    );
  }
}

const estilos = StyleSheet.create({
  area:{
    padding:50,
    backgroundColor:'#F2F2F2',
    color:'white',
  },
  barra:{
    color:'white',
    marginTop: 30,
    textAlign: 'center',
    height: 52,
    backgroundColor:'#141718',
  },
  
  texto:{
    color:'#FFFFFF',
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    marginTop: 10, fontSize: 25, color: '#000000', textAlign: 'center'
  },
  foto:{
    width: 290,
    height: 220,
    marginTop:20,
    textAlign:'center',
    borderRadius: 10,
  },
  noticias:{
    fontSize:13, marginTop:20
  },
});
export default App;