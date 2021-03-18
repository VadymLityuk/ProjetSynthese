import React,{useState,useEffect} from "react";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import myimage from '../images/office.jpg'
import sign from '../images/sign.png'
import './style/main.css'
import './style/slider.scss'
import fire from '../fire'
import Admin from './Admin';
import Connexion from './Connexion';

import Footer from './Footer'
import Header from './Header'
//import '../MainPage/page.css'


  export default function Apropos() {
    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailerror,seTemailerror] = useState('');
    const [passworderror,setPassworderror] = useState('');
    const [hasaccount,setHasaccount] = useState(false);


    const clearInputs = () => {
    setEmail('');
    setPassword('');
    }

    const clearErrors = () => {
      seTemailerror('');
      setPassword('');
    }

    const handleLogin = () =>{
    clearErrors();
  fire
  .auth()
  .signInWithEmailAndPassword(email,password)
  .catch(err => {
    switch(err.code){
      case "auth/invalid-email":
      case "auth/user-disabled":
      case "auth/user-not-found":
        seTemailerror(err.message);
        break;
        case "auth/wrong-password":
          setPassworderror(err.message);
          break;
    }
  })
};

const handleSignup = () =>{
  clearErrors();
  fire
  .auth()
  .createUserWithEmailAndPassword(email,password)
  .catch(err => {
    switch(err.code){
      case "auth/email-already-used":
      case "auth/invalid-email":
        seTemailerror(err.message);
        break;
        case "auth/weak-password":
          setPassworderror(err.message);
          break;
    }
  })
};

const handleLogOut = () => {
   fire.auth().signOut();
};

const authlistener = () => {

  fire.auth().onAuthStateChanged(user =>{
  if(user){
    clearInputs();
   setUser(user);
  } else {
    setUser('');
  }
  }
    )
};

useEffect(() => {
   authlistener();
}, []);

    return (
    <>
     {user ? (
       <>
<Admin handleLogOut={handleLogOut} />
</>
   ) : (
     <>
     <Connexion 
     email={email} 
     setEmail={setEmail} 
     password={password} 
     setPassword={setPassword} 
     handleLogin={handleLogin}
     handleSignup={handleSignup}
     hasaccount={hasaccount}
     setHasaccount={setHasaccount}
     emailerror={emailerror}
     passworderror={passworderror}
     />
     </>
   )}
    </>
    );
  }

 

