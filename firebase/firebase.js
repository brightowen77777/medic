// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAKps8sIAxmJ5Wc0ZuKjTdhekFgwO5Kik",
  authDomain: "polar-strata-362013.firebaseapp.com",
  projectId: "polar-strata-362013",
  storageBucket: "polar-strata-362013.appspot.com",
  messagingSenderId: "258302658459",
  appId: "1:258302658459:web:ea67f1db2e0fead295833e"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);