import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';

import Lista from './src/Lista';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      feed: [
        {
          id: '1',
          nome: 'sergio.souzaa_',
          descricao: 'HAHAHA :)',
          imgperfil: require('./src/img/euu.png'),
          imgPublicacao: require('./src/img/haha.png'),
          likeada: false,
          likers: 1000
        },
        {
          id: '2',
          nome: 'Boy Calçado',
          descricao: 'Isso sim é ser raiz!!!!!',
          imgperfil: require('./src/img/sub/fotoPerfil1.png'),
          imgPublicacao: require('./src/img/sub/foto3.png'),
          likeada: false,
          likers: 0
        },
        {
          id: '3',
          nome: ' Augusto Oliveira',
          descricao: 'Bora trabalhar Haha',
          imgperfil: require('./src/img/sub/fotoPerfil3.png'),
          imgPublicacao: require('./src/img/sub/foto2.png'),
          likeada: false,
          likers: 3
        },
        {
          id: '4',
          nome: 'Gustavo Stonks',
          descricao: 'Isso sim que é TI!',
          imgperfil: require('./src/img/sub/fotoPerfil2.png'),
          imgPublicacao: require('./src/img/sub/foto4.png'),
          likeada: false,
          likers: 1
        },
        {
          id: '5',
          nome: 'Boy Calçado',
          descricao: 'Boa tarde galera do insta...',
          imgperfil: require('./src/img/sub/fotoPerfil1.png'),
          imgPublicacao: require('./src/img/sub/fotoPerfil1.png'),
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
            <Image style={styles.logo}
              source={require('./src/img/Senagram.png')}
            />
          </TouchableOpacity>


          <TouchableOpacity>
            <Image style={styles.send}
              source={require('./src/img/send.png')}
            />
          </TouchableOpacity>


        </View>

        <FlatList
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={({ item }) => <Lista data={item} />}

        >
        </FlatList>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
    marginTop: 20,
  },


  logo: {


  },

  send: {
    height: 23,
    width: 23,
  }
});

export default App;