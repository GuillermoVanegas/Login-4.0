import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAb0sYOIVI8HJN_LQYT2fUfVBeDp9SDAcE",
  authDomain: "web400-c3e67.firebaseapp.com",
  projectId: "web400-c3e67",
  storageBucket: "web400-c3e67.appspot.com",
  messagingSenderId: "103169501684",
  appId: "1:103169501684:web:fbf623eb1221ee5f7e71a1"
}; 
const app = initializeApp(firebaseConfig);

// Initialize Firebase

var auth = getAuth(app);

export { auth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut};
