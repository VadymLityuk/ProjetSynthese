import React from "react";
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
import './style/main.css'
import './style/quotes.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DATA from '../offredata.json'
import {useState} from 'react'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

import stager from '../images/avatar.jpg'

import './style/admin.css'
import Dashboard from './Adminpanel'
import AdminAccueil from './AdminAccuel'



const Admin = ({handleLogOut}) => {
   return(
      <>
      <div  style={{padding: '15px 2px 4px 22px'}}>
      <Button variant="contained" color="secondary" onClick={handleLogOut}>
              Log Out
     </Button>
     </div>
      <Dashboard />
      
    </>
   );
};



export default Admin;