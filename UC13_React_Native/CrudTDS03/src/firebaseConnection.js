// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-pOLFSI8uG2k_1n-a8HM3UzQRftN8AWw",
  authDomain: "tds03-b18e1.firebaseapp.com",
  projectId: "tds03-b18e1",
  storageBucket: "tds03-b18e1.firebasestorage.app",
  messagingSenderId: "357204919657",
  appId: "1:357204919657:web:1bd2d40d0ecf146a5ae9f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};