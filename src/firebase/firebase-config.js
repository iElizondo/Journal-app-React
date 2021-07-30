import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC67zjExkuVLHmHdPLfjZ0gLrZJBh_c2F0",
    authDomain: "react-app-cursos-659ad.firebaseapp.com",
    projectId: "react-app-cursos-659ad",
    storageBucket: "react-app-cursos-659ad.appspot.com",
    messagingSenderId: "899491103323",
    appId: "1:899491103323:web:5f715e6efae677ea43f57e"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}