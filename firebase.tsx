// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF_Vm4rFUY3hX3EtOUQllJD2IRiWpLKs0",
  authDomain: "ejemplotec-e1f19.firebaseapp.com",
  databaseURL: "https://ejemplotec-e1f19-default-rtdb.firebaseio.com",
  projectId: "ejemplotec-e1f19",
  storageBucket: "ejemplotec-e1f19.firebasestorage.app",
  messagingSenderId: "123519213515",
  appId: "1:123519213515:web:982e75773dc5022870a04e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;