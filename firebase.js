import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAP8cRKPA356m2Rep3yEMt0d7fFZrK42kc",
  authDomain: "fir-f1f1f.firebaseapp.com",
  projectId: "fir-f1f1f",
  storageBucket: "fir-f1f1f.appspot.com",
  messagingSenderId: "23712764764",
  appId: "1:23712764764:web:405b5e25b65aa6aee26799",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
