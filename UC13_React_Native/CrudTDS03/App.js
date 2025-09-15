// app.js CORRIGIDO

import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { auth } from "./src/firebaseConnection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged, // Importe onAuthStateChanged
} from "firebase/auth";
import { FormUser } from "./src/formUser"; // Corrigido o import

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [AuthUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. useEffect CORRIGIDO
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Se o usuário estiver logado, atualiza o estado com as informações dele
        setAuthUser({
          email: user.email,
          uid: user.uid,
        });
      } else {
        // Se não houver usuário, o estado fica nulo
        setAuthUser(null);
      }
      setLoading(false); // Para o loading após a verificação
    });

    // Função de limpeza para remover o listener ao desmontar o componente
    return () => unsubscribe();
  }, []);

  async function handleCreateUser() {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, senha);
      console.log(user);
      setEmail("");
      setSenha("");
      alert("Cadastro realizado com sucesso");
    } catch (error) {
      alert("Erro ao cadastrar: " + error.message);
    }
  }

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // O onAuthStateChanged já vai cuidar de atualizar o AuthUser
        console.log("Login com sucesso!");
        setEmail("");
        setSenha("");
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === "auth/missing-password") {
          alert("Senha Obrigatória");
        } else {
          alert("Erro ao logar: " + err.message);
        }
      });
  }

  // Função de logout simplificada
  function handleLogout() {
    signOut(auth).catch((error) => {
      alert("Erro ao sair: " + error.message);
    });
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  // 2. RENDERIZAÇÃO CONDICIONAL
  // Se AuthUser tiver um valor (não for nulo), mostra a tela do usuário
  if (AuthUser) {
    return (
      <View style={styles.containerFormUser}>
        <Text style={{fontSize: 18, marginBottom: 20}}>
            Logado como: {AuthUser.email}
        </Text>
        <FormUser />
        <TouchableOpacity style={styles.BotaoSair} onPress={handleLogout}>
          <Text style={styles.TextLogin}>SAIR</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Se AuthUser for nulo, mostra a tela de Login/Cadastro
  return (
    <View style={styles.container}>
      <Text style={styles.txtInput}>E-mail</Text>
      <TextInput
        style={styles.Input}
        placeholder="Informe seu E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />

      <Text style={styles.txtInput}>Senha</Text>
      <TextInput
        style={styles.Input}
        placeholder="Informe sua Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.LoginInput} onPress={handleCreateUser}>
        <Text style={styles.TextLogin}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.LoginInput} onPress={handleLogin}>
        <Text style={styles.TextLogin}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  containerFormUser: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  txtInput: {
    color: "#000",
    marginBottom: 4,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    width: "70%",
    marginLeft: "15%",
  },
  Input: {
    width: "70%",
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 18,
    color: "#000",
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#007AFF",
    elevation: 10,
    shadowColor: "darkblue",
  },
  LoginInput: {
    width: "70%",
    height: 55,
    backgroundColor: "#007AFF",
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#007AFF",
    elevation: 10,
    shadowColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  BotaoSair: {
    width: "90%",
    height: 55,
    backgroundColor: "#ce392c",
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ce392c",
    elevation: 10,
    shadowColor: "#ce392c",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
  },
  TextLogin: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});