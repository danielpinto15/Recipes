import firebase from "firebase/app";
import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQAop1bfiHESTjOIJGVJtAHBSnRbixzrE",
    authDomain: "manager-app-98167.firebaseapp.com",
    projectId: "manager-app-98167",
    storageBucket: "manager-app-98167.appspot.com",
    messagingSenderId: "169011919766",
    appId: "1:169011919766:web:1ee30193199f30e0177bb7",
    measurementId: "G-2VT770YWFS"
  };

 //init firebase

 firebase.initializeApp(firebaseConfig);

 //init services

 const projectFirestore = firebase.firestore();

 export { projectFirestore }