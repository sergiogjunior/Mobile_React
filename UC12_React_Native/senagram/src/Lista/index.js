import { Component } from 'react';
import {  Text, View, StyleSheet,Image ,TouchableOpacity} from 'react-native';
 
class Lista extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
    feed:this.props.data
    };
    this.like = this.like.bind(this);
    this.carregaIcone = this.carregaIcone.bind(this)
  }

  carregaIcone(likeada){
    return likeada ? require('../likeada.png') : require('../like.png')
  }

  like(){
    let curtir = this.state.feed.likeada
    if (curtir == true){
      this.setState({
        feed:{
          curtir:false
        }
      })
    }
    else{
      this.setState({
        feed:{
          curtir:true
        }
      })
    }
  }
 
  render() {
    return (
        <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
            <Image style={styles.fotoPerfil}
            source={{uri: this.state.feed.imgperfil}}></Image>
            <Text style={styles.nomeperfil}> {this.state.feed.nome}</Text>
        </View>
 
        <Image style={styles.fotoPublicacao}
        source={{uri: this.state.feed.imgPublicacao}}
        resizeMode='cover'
        ></Image>


        <View style={styles.areaBtn}>
            <TouchableOpacity>
            <Image style={styles.iconeLike}
            source={this.carregaIcone(this.state.feed.likeada)}
            ></Image>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles.btnSend}>
            <Image style={styles.iconeLike}
            source={require('../send.png')}
            ></Image>
            </TouchableOpacity>
 
        </View>
        <View style={styles.viewRodape}></View>
       
        <Text style={styles.nomeRodape}> {this.state.feed.nome}</Text>
        <Text style={styles.descRodape}> {this.state.feed.descricao}</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
areaFeed:{},
viewPerfil:{
  flexDirection:'row',
  padding: 8,
  flex: 1,
  alignItems: 'center'
},
fotoPerfil:{
  width:50,
  height: 50,
  borderRadius: 25,
},
nomePerfil:{
  textAlign: 'left',
  marginLeft:'8'
},
fotoPublicacao:{
  flex:1,
  height: 400,
  alignItems:'center'
},
areaBtn:{
  flexDirection:'row',
  padding:5
},
iconeLike:{
  width: 30,
  height: 30,
},
viewRodape:{
  flexDirection:'row',
  alignItems:'center'
},
nomeRodape:{
  fontWeight:'bold',
  fontSize:18,
  color:'#000',
  paddingLeft:5
},
descRodape:{
  paddingLeft:5,
  fontSize: 15,
  color:'#000'
},
btnSend:{
  paddingLeft:5
}


});
 
 
 
  export default Lista;