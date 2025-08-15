import { doc, deleteDoc } from "firebase/firestore";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { db } from "./firebaseConnection";

export function UsersList({data, handlerEdit}){

  async function handlerDeleteItem(){
    const docRef = doc(db, "users", data.id)
    await deleteDoc(docRef)
  }

  function handlerEditUser(){
    console.log(data)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.item}>Nome: {data.nome} </Text>
      <Text style={styles.item}>Idade: {data.idade} </Text>
      <Text style={styles.item}>Cargo: {data.cargo} </Text>
      <TouchableOpacity style={styles.buttonExc} onPress={handlerDeleteItem}>
        <Text style={styles.txtButton}>Deletar Usuario</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonEdt} onPress={handlerEditUser}>
        <Text style={styles.txtButton}>Editar Usuario</Text>
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
  },
  item:{
    color:'#000',
    fontSize: 16,
  },
  buttonExc:{
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonEdt:{
    alignSelf: 'flex-end',
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10
  },
  txtButton:{
    color: '#fff',
    textAlign: 'center'
  }
})