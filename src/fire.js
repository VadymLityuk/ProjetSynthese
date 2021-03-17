
import firebase from 'firebase';





var firebaseConfig = {
    apiKey: "AIzaSyB2VzAV91HOzOlYspr0QzNjNOKG_jJEt5A",
    authDomain: "login-ae9cb.firebaseapp.com",
    projectId: "login-ae9cb",
    storageBucket: "login-ae9cb.appspot.com",
    messagingSenderId: "1090734488476",
    appId: "1:1090734488476:web:296ef1e9269dfd0b902659"
  };

 const fire = firebase.initializeApp(firebaseConfig);

 export default fire


 //export dafault fire;