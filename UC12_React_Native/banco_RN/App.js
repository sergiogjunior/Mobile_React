import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
 
const Stack = createStackNavigator();
 
function LoginScreen({ navigation }) {
    return (
<View className="flex-1 items-center justify-center bg-white px-8">
<Image source={{ uri: 'https://i.imgur.com/tGbaZCY.png' }} style={{ width: 150, height: 150 }} />
<Text className="text-3xl font-bold mb-8">StonksOil</Text>
<TextInput placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4" />
<TextInput placeholder="Senha" secureTextEntry className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4" />
<TouchableOpacity onPress={() => navigation.navigate('CarList')} className="w-full bg-black py-3 rounded-lg mb-4">
<Text className="text-white text-center font-semibold">Sign In</Text>
</TouchableOpacity>
<TouchableOpacity>
<Text className="text-sm text-gray-500">Forgot password?</Text>
</TouchableOpacity>
</View>
    );
}
 
function CarListScreen({ navigation }) {
    return (
<View className="flex-1 bg-white px-4 py-6">
<Text className="text-2xl font-bold mb-4">Meu carro</Text>
<View className="bg-gray-200 rounded-lg h-24 mb-4"></View>
<View className="bg-gray-200 rounded-lg h-24 mb-4"></View>
<TouchableOpacity onPress={() => navigation.navigate('AddCar')} className="border border-gray-400 py-3 rounded-lg items-center">
<Text className="text-lg font-semibold">Adicionar carro</Text>
</TouchableOpacity>
</View>
    );
}
 
function AddCarScreen({ navigation }) {
    return (
<ScrollView className="flex-1 bg-white px-4 py-6">
            {['Marca', 'Modelo', 'Ano de fabricação', 'Versão', 'Motor', 'Transmissão'].map((placeholder) => (
<TextInput key={placeholder} placeholder={placeholder} className="border border-gray-300 rounded-lg px-4 py-2 mb-4" />
            ))}
<TouchableOpacity onPress={() => navigation.navigate('Dashboard')} className="bg-black py-3 rounded-lg">
<Text className="text-white text-center font-semibold">Avançar</Text>
</TouchableOpacity>
</ScrollView>
    );
}
 
function DashboardScreen({ navigation }) {
    return (
<LinearGradient colors={["#00BFFF", "#00FFFF"]} className="flex-1 items-center justify-center">
<Image source={{ uri: 'https://i.imgur.com/tGbaZCY.png' }} style={{ width: 100, height: 100, marginBottom: 20 }} />
<Text className="text-3xl font-bold text-white mb-8">StonksOil</Text>
<View className="grid grid-cols-2 gap-4">
                {Array(4).fill(null).map((_, index) => (
<View key={index} className="bg-white rounded-lg w-32 h-32"></View>
                ))}
</View>
<TouchableOpacity onPress={() => navigation.navigate('FuelResult')} className="bg-white py-3 px-6 rounded-lg mt-8">
<Text className="text-black font-semibold">Adicionar Carro</Text>
</TouchableOpacity>
</LinearGradient>
    );
}
 
function FuelResultScreen() {
    return (
<View className="flex-1 items-center justify-center bg-white px-8">
<Image source={{ uri: 'https://i.imgur.com/tGbaZCY.png' }} style={{ width: 150, height: 150, marginBottom: 20 }} />
<Text className="text-2xl font-bold mb-4">Compensa usar Álcool</Text>
<Text className="text-lg mb-8">Com os preços:
Álcool: R$ 4,60
Gasolina: R$ 7,60</Text>
<TouchableOpacity className="border border-black py-3 px-6 rounded-lg">
<Text className="text-center text-black font-semibold">Calcular Novamente</Text>
</TouchableOpacity>
</View>
    );
}
 
export default function App() {
    return (
<NavigationContainer>
<Stack.Navigator screenOptions={{ headerShown: false }}>
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="CarList" component={CarListScreen} />
<Stack.Screen name="AddCar" component={AddCarScreen} />
<Stack.Screen name="Dashboard" component={DashboardScreen} />
<Stack.Screen name="FuelResult" component={FuelResultScreen} />
</Stack.Navigator>
</NavigationContainer>
    );
}