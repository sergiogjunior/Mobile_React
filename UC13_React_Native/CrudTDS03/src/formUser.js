import { cloneElement, useEffect , useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity , TextInput , FlatList } from 'react-native';
import {db} from '../src/firebaseConnection';
import {doc , getDocs , onSnapshot , setDoc , collection , addDoc, updateDoc} from 'firebase/firestore'
 
import { UsersList } from './users';


export function FormUser() {
  const[nome , setNome ] = useState();
  const [idade , setIdade] = useState();
  const [cargo , setCargo] = useState();
  const [showForm, setshowForm] = useState(true);
  const [users,setUsers]= useState([]);

  const [isEditing, setIsEditing] = useState("")
 
  useEffect(()=>{
    async function getDados() {
      // const docref = doc(db,"Users" , "2")
      // await getDoc(docref)
      // .then((snapshot)=>{
      //  console.log(snapshot.data())
      //  setnome(snapshot.data()?.Nome)
      // })
      // .catch((err)=>{
      //   console.log('error: ')
      //   console.log(err)
      // })
      // onSnapshot(doc(db , "Users" , "2") , (doc)=>{
      //   setnome(doc.data()?.Nome)
      // })
      //const usersRef = collection(db , "users");
 
      //getDocs(usersRef)
      //.then((snapshot)=>{
      //  let lista = [];
      //  snapshot.forEach((doc)=>{
      //    lista.push({
      //      id: doc.id,
      //      nome:doc.data().Nome,
      //      idade:doc.data().Idade,
      //      cargo:doc.data().Cargo
      //    })
      //  })
      //  //console.log(lista);
      //  setUsers(lista)
      //})

      const usersRef = collection(db, "users");
      onSnapshot(usersRef, (snapshot)=>{
        let lista = [];
      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          nome:doc.data().Nome,
          idade:doc.data().Idade,
          cargo:doc.data().Cargo
        })
      })
      setUsers(lista);
      })
    }
    getDados();
  },[])
 
  async function handlerRegister() {
 
    if (nome === '' || idade === '' || cargo === '') {
      Alert.alert('Atenção', 'Preencha todos os campos antes de enviar.');
      return;
    }
 
   
    // await setDoc(doc(db,"Users" , "4"),{
    //   nome:"Catarina",
    //   idade:"26",
    //   cargo:"Front-End",
    // })
    // .then(()=>{
    //   console.log("Cadastro com sucesso")
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
    await addDoc(collection (db,"users" ),{
      Cargo:cargo,
      Idade:idade,
      Nome:nome,
     
     })
    // .then(()=>{
    //     console.log("Cadastro com sucesso")
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   })
   setNome("");
   setIdade("");
   setCargo("");
  }
 
  function handleToggle(){
    setshowForm(!showForm);
  }

  function editUser(data){
    //console.log(data);
    setNome(data.nome)
    setIdade(data.idade)
    setCargo(data.cargo)
    setIsEditing(data.id)
  }

  async function handlerEditUser(){
    const docRef = doc(db, "users", isEditing)
    await updateDoc(docRef,{
    Nome: nome,
    Idade: idade,
    Cargo: cargo
    })
    setIsEditing("")
    setCargo("")
    setIdade("")
    setNome("")
  }
 
  return (
 
    <View style={styles.container}>
 
      {showForm &&(
 
<View>
<Text style={styles.label}>Nome:</Text>
  <TextInput
  style={styles.Input}
  placeholder='Digite Seu Nome'
  value={nome}
  onChangeText={(text)=>setNome(text)}
  />
 
  <Text style={styles.label}>Idade:</Text>
 
<TextInput
  style={styles.Input}
  placeholder='Digite Sua Idade'
  value={idade}
  onChangeText={(text)=>setIdade(text)}
  />
 
<Text style={styles.label}>Cargo:</Text>
 
<TextInput
  style={styles.Input}
  placeholder='Digite Seu Cargo'
  value={cargo}
  onChangeText={(text)=>setCargo(text)}
  />
 
 {isEditing != "" ?(
  <TouchableOpacity style={styles.button} onPress={handlerEditUser}>
    <Text style={styles.buttonText}>Editar</Text>
  </TouchableOpacity>
 ):(
  <TouchableOpacity style={styles.button} onPress={handlerRegister}>
    <Text style={styles.buttonText}>Cadastrar</Text>
  </TouchableOpacity>
 )}
  
  </View>
      )}
  
      <TouchableOpacity style={styles.button} onPress={handleToggle}>
        <Text style={styles.buttonText}>{showForm?"Escoder Formulario" : "Mostrar Formulario"}</Text>
      </TouchableOpacity>
 
      <FlatList style={styles.lista}
      data={users}
      keyExtractor={(item)=> String(item.id)}
      renderItem={({item})=><UsersList data={item} handlerEdit={(item)=>editUser(item)} ></UsersList>}
      />
 
 
 
     
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
  },
 
  button:{
    backgroundColor: '#000',
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
 
  buttonText:{
    padding: 10,
    color: '#fff',
    textAlign: 'center',
  },
  label:{
    color: '#000',
    fontSize: 18,
    marginBottom: 4,
    marginLeft: 10,
 
  },
  Input:{
    borderWidth: 1,
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
  },
  lista:{
    marginLeft:10,
    marginRight:10,
    marginTop:10,
  }
 
});