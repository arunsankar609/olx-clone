import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjyk5v-3bAqhLrX4ocGaapWhknupCoUrw",
  authDomain: "fir-1107a.firebaseapp.com",
  projectId: "fir-1107a",
  storageBucket: "fir-1107a.appspot.com",
  messagingSenderId: "598359134190",
  appId: "1:598359134190:web:dfd3da2ce9c925cdde88ff",
  measurementId: "G-FR6YWEY95M"
};
  export default firebase.initializeApp(firebaseConfig)