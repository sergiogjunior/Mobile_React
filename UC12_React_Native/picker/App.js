import { Component } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valorSlider: 0,
      valorSwitch: false,
      pizza: 0,
      pizzas: [
        { key: 0, nome: 'Calabreza', valor: 35.90 },
        { key: 1, nome: 'Muzzarela', valor: 59 },
        { key: 2, nome: 'Quatro queijos', valor: 37 },
        { key: 3, nome: 'Frango Catupiry', valor: 25.90 },
        { key: 4, nome: 'Portuguesa', valor: 70 },
        { key: 5, nome: 'Brigadeiro', valor: 27 }
      ]
    }
  }

  render() {

    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={v.key} value={v.key} label={v.nome}></Picker.Item>;
    });

    return (
      <View style={styles.container}>
        <Text style={styles.menu}>Menu Pizza</Text>
        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValor) => this.setState({ pizza: itemValor })}
        >
          {pizzasItem}

        </Picker>

        <Text style={styles.pizza}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizza}>R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>

        <Text style={styles.pizza}>Troco para: {this.state.valor}</Text>
        <Slider
          value={this.state.valorSlider}
          onValueChange={(valorSlider => this.setState({ valor: valorSlider }))}
          minimumValue={0}
          maximumValue={100}
          step={1}
          minimumTrackTintColor='green'
          maximumTrackTintColor='red'
        ></Slider>
        <Text style={styles.valor}>valor: {this.state.valor}</Text>

        <View style={styles.switch}>
          <Text style={styles.valor}>Borda Recheada:</Text>
          <Switch
            value={this.state.valorSwitch}
            onValueChange={(valorSelecionado) => this.setState({ valorSwitch: valorSelecionado })}
          ></Switch>
          <Text style={styles.valor}>
            {(this.state.valorSwitch) ? 'sim' : 'não'}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  menu: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  pizza: {
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  valor: {
    marginTop: 10,
    fontSize: 20,
    margin: 10
  },
  switch: {
    margin: 10,
    flexDirection: 'row'
  }
});
