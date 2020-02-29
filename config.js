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

