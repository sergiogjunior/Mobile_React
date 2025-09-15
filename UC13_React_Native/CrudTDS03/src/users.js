import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { db } from "./firebaseConnection";
import { deleteDoc, doc } from "firebase/firestore";
 
export function UsersList({ data, handlerEdit }) {
  async function handlerDeletarItem() {
    // console.log(data)
    const docRef = doc(db, "Users", data.id);
    await deleteDoc(docRef);
  }
 
  function handlerEditUser() {
    //console.log(data)
    handlerEdit(data);
  }
  return (
    <View style={styles.container}>
      <Text>Nome: {data.nome}</Text>
      <Text>Idade:{data.idade}</Text>
      <Text>Cargo:{data.cargo}</Text>
      <TouchableOpacity style={styles.botao} onPress={handlerDeletarItem}>
        <Text style={styles.texto}>Deletar Usuário</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.butonEdit} onPress={handlerEditUser}>
        <Text style={styles.texto}>Editar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    margin: 10,
    borderRadius: 8,
  },
  botao: {
    padding: 10,
    width: 75,
    borderRadius: 10,
    borderColor: "black",
    height: 60,
    backgroundColor: "#DC143C",
    borderWidth: 2,
    margin: 10,
    marginLeft: 250,
    marginTop: 38,
  },
 
  butonEdit: {
    padding: 10,
    width: 75,
    borderRadius: 10,
    borderColor: "black",
    height: 60,
    backgroundColor: "green",
    borderWidth: 2,
    margin: 15,
    marginrigth: 250,
    marginTop: -70,
  },
 
  texto: {
    fontWeight: "bold",
    color: "#fff",
  },
});