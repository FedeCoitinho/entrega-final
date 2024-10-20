// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi1-bmKSp06-h78QRK2A4-YAca2xcw2Uc",
  authDomain: "mylievet.firebaseapp.com",
  projectId: "mylievet",
  storageBucket: "mylievet.appspot.com",
  messagingSenderId: "301346999560",
  appId: "1:301346999560:web:04c5b13479a69712a5b0bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);