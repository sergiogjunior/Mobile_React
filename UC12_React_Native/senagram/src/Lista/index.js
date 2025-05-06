import { Component } from 'react';
import { Text , View, Image, StyleSheet} from 'react-native';
 
class Lista extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
        feed: this.props.data
    };
  }
 
  render() {
    return (
      <View style={style.areaFeed}>
        <View style={style.viewPerfil}></View>
        <Image style={style.fotoPublicao}></Image>
        <View style={style.areaBtn}></View>
        <View style={style.viewRodape}></View>
      </View>
    );
}
}

const style = StyleSheet.create({
    areaFeed:{},
    viewPerfil:{},
    fotoPublicao:{},
    areaBtn:{},
    viewRodape:{},



});


export default Lista;