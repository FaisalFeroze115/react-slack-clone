import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCltcedBQpgicux0H6CY6Q30piOkBA3jsY",
    authDomain: "slack-clone-c0731.firebaseapp.com",
    projectId: "slack-clone-c0731",
    storageBucket: "slack-clone-c0731.appspot.com",
    messagingSenderId: "968528292321",
    appId: "1:968528292321:web:834c9214c7c3eaf6c1caa0",
    measurementId: "G-XVK60LXGDM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth, provider}
  
  export default db;
  