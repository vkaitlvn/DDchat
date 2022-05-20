import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/compat/auth';


export const auth = firebase.initializeApp ({
  
  apiKey: "AIzaSyBd_8KBN7bb0VTslXTifDqtrJRlTkJoH_w",
  authDomain: "three-f8d71.firebaseapp.com",
  projectId: "three-f8d71",
  storageBucket: "three-f8d71.appspot.com",
  messagingSenderId: "321510844909",
  appId: "1:321510844909:web:1c575abd4f0320e83b5fe4",
  measurementId: "G-DLJC6LRT7Z"    
  
  }).auth();