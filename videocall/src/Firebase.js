// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";




const firebaseConfig = {
 
  apiKey: "AIzaSyDZh1rmym_yvA76pBnjns0_3g4A-wEY4gc",
  authDomain: "hamrowakil-d3a2e.firebaseapp.com",
  databaseURL: "https://hamrowakil-d3a2e-default-rtdb.firebaseio.com",
  projectId: "hamrowakil-d3a2e",
  storageBucket: "hamrowakil-d3a2e.appspot.com",
  messagingSenderId: "447191334220",
  appId: "1:447191334220:web:122af65027cb27a8d063e9"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();


export default firebase;



