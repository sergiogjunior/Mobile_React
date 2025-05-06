import { Component } from 'react';
import { StyleSheet, Image , Text , View, TouchableOpacity, FlatList} from 'react-native';

import Lista from './src/Lista'
 
class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
        feed: [
          {
            id: '1', 
            nome: 'Jeremias Stonkyz', 
            descricao: 'Mais um dia de muitos bugs :)', 
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
            likeada: false, 
            likers: 0
           },
          {
            id: '2', 
            nome: 'Matheus Tinocco', 
            descricao: 'Isso sim é ser raiz!!!!!', 
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
            likeada: false, 
            likers: 0
          },
          {
            id: '3', 
            nome: 'Jose Calçado', 
            descricao: 'Bora trabalhar Haha', 
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
            likeada: false, 
            likers: 3
          },
          {
            id: '4', 
            nome: 'Gustavo Germanio', 
            descricao: 'Isso sim que é TI!', 
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
            likeada: false, 
            likers: 1
          },
          {
            id: '5', 
            nome: 'Guilherme Boy', 
            descricao: 'Boa tarde galera do insta...', 
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
            likeada: false, 
            likers: 32
          }
        ]

    };
  }
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>

          <TouchableOpacity>
            <Image 
            style={styles.logo}
            source={require('./src/Senagram.png')}
            />
          </TouchableOpacity>

          

          <TouchableOpacity>
          <Image 
            style={styles.send}
            source={require('./src/send.png')}
            />
          </TouchableOpacity>
        </View>

        <FlatList
        keyExtractor={(item)=> item.id}
        data={this.state.feed}
        renderItem={({item})=><Lista data={item}/>}
        ></FlatList>

      </View>
    );
  }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    header:{
      height:55,
      backgroundColor:'#fff',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      padding: 5,
      borderBottomWidth: 0.2,
      shadowColor:'#000',
      elevation:1,
      marginTop:22, 
    },
    logo:{

    },
    send:{
      height:23,
      width:23,
    },
  });
 
  export default App;