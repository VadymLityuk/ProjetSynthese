import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import logo from '../images/logo.png'
import AppBar from '@material-ui/core/AppBar';
//import './style/main.css'
import './style/header.scss'
import fire from '../fire'



const Header = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  
    const handleLogOut = () => {
      fire.auth().signOut();
   };
  
    const handleLogin = () =>{
      //clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    
    };
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
    const classes = useStyles();
   /* if (handleLogOut) {
     return (
      <>
      <div>gsdgsdg</div>
    
     </>
      );
  }
  */
  if(handleLogOut) {
   return (<> 
       <div className="header-area ">
   <div id="sticky-header" className="main-header-area">
       <div className="container-fluid ">
           <div className="header_bottom_border">
               <div className="row align-items-center">
                   <div className="col-xl-3 col-lg-2">
                       <div className="logo">
                           <a href="index.html">
                           <Link  to={"/Accueil"}>
                           <img src={logo} alt=""/>
                               </Link> 
                           </a>
                       </div>
                   </div>
                   <div class="col-xl-6 col-lg-7">
                       <div class="main-menu  d-none d-lg-block">
                           <nav>
                               <ul id="navigation">
                               <Link to={"/"}><li><a>Accueil</a></li></Link>
                                   <Link to={'/Offre'}>
                                   <li><a>Trouves une stage</a></li>
                                   </Link>
                                   <li><a>pages <i class="ti-angle-down"></i></a>
                                       <ul class="submenu">   
                                        <li><Link to={"/Stagier"}><a>Stagiaires</a></Link></li>
                                           <li> <Link to={"/Stages"}><a>Stages</a></Link></li>
                                            <li><Link to={'/Offre'}><a>Tous les Offres</a> </Link></li>
                                       </ul>
                                   </li>
                                   <li><a href="#">blog <i class="ti-angle-down"></i></a>
                                       <ul class="submenu">
                                           <li><a href="blog.html">blog</a></li>
                                           <li><a href="single-blog.html">single-blog</a></li>
                                       </ul>
                                   </li>
                                   <Link to={"/Contact"}> <li><a >Contact</a></li></Link>
                               </ul>
                           </nav>
                       </div>
                   </div>
                   <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                       <div class="Appointment">
                           <div class="d-none d-lg-block">
                               <Link to={'/Apropos'}>
                   <Button style={{backgroundColor: '#00D363',color: 'white' }} variant="contained" >Connexion</Button>
                   </Link>
                           </div>
                       </div>
                   </div>
                   <div class="col-12">
                       <div class="mobile_menu d-block d-lg-none"></div>
                   </div>
               </div>
           </div>

       </div>
   </div>
</div>
</>

  
);
}}
  
  export default  Header;
   