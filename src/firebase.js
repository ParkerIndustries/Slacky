import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD5-94QGnucLJm5McjvFmCqowfRT6tsUIA",
    authDomain: "slacky-674f5.firebaseapp.com",
    projectId: "slacky-674f5",
    storageBucket: "slacky-674f5.appspot.com",
    messagingSenderId: "890779307398",
    appId: "1:890779307398:web:5224550a02508d3c63b007"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

export default db;