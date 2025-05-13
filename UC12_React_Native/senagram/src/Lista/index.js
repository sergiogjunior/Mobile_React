import { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

class Lista extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data
    };
    this.like = this.like.bind(this);
    this.carregaIcone = this.carregaIcone.bind(this);
    this.mostrarLikes = this.mostrarLikes.bind(this);
  }

  carregaIcone(likeada) {
    return likeada ? require('../img/likeada.png') : require('../img/like.png')
  }

  like() {
    let curtir = this.state.feed;

    if (curtir.likeada === true) {
      this.setState({
        feed: {
          ...curtir,
          likeada: false,
          likers: curtir.likers - 1
        }
      })
    }
    else {
      this.setState({
        feed: {
          ...curtir,
          likeada: true,
          likers: curtir.likers + 1
        }
      })
    }
  }

  mostrarLikes(likers) {

    let feed = this.state.feed

    if (feed.likers <= 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'Curtidas' : 'Curtida'}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image style={styles.fotoPerfil} source={this.state.feed.imgperfil} />


          <Text style={styles.nomeperfil}> {this.state.feed.nome}</Text>
        </View>

        <Image style={styles.fotoPublicacao}
          source={this.state.feed.imgPublicacao}
          resizeMode='cover'
        />

        <View style={styles.areaBtn}>
          <TouchableOpacity onPress={this.like}>
            <Image style={styles.iconeLike}
              source={this.carregaIcone(this.state.feed.likeada)}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSend}>
            <Image style={styles.iconeLike}
              source={require('../img/send.png')}
            ></Image>
          </TouchableOpacity>
        </View>

        {this.mostrarLikes(this.state.feed.likers)}

        <View style={styles.viewRodape}></View>

        <Text style={styles.nomeRodape}> {this.state.feed.nome}</Text>
        <Text style={styles.descRodape}> {this.state.feed.descricao}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaFeed: {},
  viewPerfil: {
    flexDirection: 'row',
    padding: 8,
    flex: 1,
    alignItems: 'center'
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nomePerfil: {
    textAlign: 'left',
    marginLeft: '8'
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    width: 400,
    alignItems: 'center'
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5
  },
  iconeLike: {
    width: 30,
    height: 30,
  },
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nomeRodape: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    paddingLeft: 5
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  btnSend: {
    paddingLeft: 5
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 17
  }


});



export default Lista;