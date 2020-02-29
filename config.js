//import Firebase from 'firebase';
/*
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import '@react-native-firebase/firestore';

let config = {
    apiKey: "AIzaSyCtmsSdW6L7swIhtVlhpha25HOk5R_6F18",
    authDomain: "study-spot-finder-58b35.firebaseapp.com",
    databaseURL: "https://study-spot-finder-58b35.firebaseio.com",
    projectId: "study-spot-finder-58b35",
    storageBucket: "study-spot-finder-58b35.appspot.com",
    messagingSenderId: "144048725017",
    appId: "1:144048725017:web:ae54536bbbfef7b4b99e88",
    measurementId: "G-RNRXYT50B1"
};
export const app = firebase.initializeApp({config});*/

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import '@react-native-firebase/firestore';// needed

var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ",
    appId: "",
    measurementId: ""
  };
  // Initialize Firebase
  //let app =  firebase.initializeApp(firebaseConfig);

  firebase.initializeApp(firebaseConfig);

  export const db = firebase.database();

