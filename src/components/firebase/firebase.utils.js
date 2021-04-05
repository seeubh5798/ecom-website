import firebase from 'firebase/app' ;
import 'firebase/firestore' ;
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAluwElVEpPvd7-ZfkovMqBG3cpCD64xuk",
    authDomain: "ecom-website-75eee.firebaseapp.com",
    projectId: "ecom-website-75eee",
    storageBucket: "ecom-website-75eee.appspot.com",
    messagingSenderId: "240716134239",
    appId: "1:240716134239:web:2b50dfda56d10d5e7da8ea",
    measurementId: "G-PC08CPQ4S4"
  };

  firebase.initializeApp(config) ;

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase ;