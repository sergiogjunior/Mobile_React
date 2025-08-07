import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export function UsersList({data}){
    return(
        <View style={styles.container}>
            <Text style={styles.item}>Nome: {data.nome} </Text>
            <Text style={styles.item}>Idade: {data.idade} </Text>
            <Text style={styles.item}>Cargo: {data.cargo} </Text>
            <TouchableOpacity style={styles.buttonExc}>
                <Text style={styles.txtButton}>Deletar Usuario</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    borderRadius:10
  },
  item:{
    color:'#000',
    fontSize: 16,
  },
  buttonExc:{
    marginLeft:250,
    backgroundColor: 'red',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  txtButton:{
    color: '#fff',
    textAlign: 'center'
  }
})