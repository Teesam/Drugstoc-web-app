import firebase  from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDAO7rp7MAe6BxZugGxm9dluVTUCg8tJlY",
    authDomain: "drugstoc-web-app.firebaseapp.com",
    databaseURL: "https://drugstoc-web-app-default-rtdb.firebaseio.com",
    projectId: "drugstoc-web-app",
    storageBucket: "drugstoc-web-app.appspot.com",
    messagingSenderId: "1060609774960",
    appId: "1:1060609774960:web:b5e9e3099ab0893161ebb5",
    measurementId: "G-ETFX0RWZ1F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();

 export default firebase;