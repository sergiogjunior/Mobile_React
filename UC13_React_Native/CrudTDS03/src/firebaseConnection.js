import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
 
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-EzI5CUiCww-1ytbZWIyZJR5BlPTR3cc",
  authDomain: "tds03-database.firebaseapp.com",
  projectId: "tds03-database",
  storageBucket: "tds03-database.firebasestorage.app",
  messagingSenderId: "612411695285",
  appId: "1:612411695285:web:fbae733544d1974f791efc"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
 
export { db , auth };