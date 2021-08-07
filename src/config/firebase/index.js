import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

//BUG CONFIG: Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAAr-cWSCn757xiLxxEA0xN75_KpXraNls",
    authDomain: "react-firebase-a20e4.firebaseapp.com",
    projectId: "react-firebase-a20e4",
    storageBucket: "react-firebase-a20e4.appspot.com",
    messagingSenderId: "1037708832707",
    appId: "1:1037708832707:web:2f1cb755b7c5bd10109776"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase;