// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBQXVdOMkU70WchDimT56-CWQGt23PYObc",
    authDomain: "clone-8625e.firebaseapp.com",
    databaseURL: "https://clone-8625e.firebaseio.com",
    projectId: "clone-8625e",
    storageBucket: "clone-8625e.appspot.com",
    messagingSenderId: "845301551931",
    appId: "1:845301551931:web:b6197d8ff065203426dd1e",
    measurementId: "G-F3S3THTG08"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };