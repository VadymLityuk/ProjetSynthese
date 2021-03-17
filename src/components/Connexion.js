import React,{useEffect} from "react";
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
import './style/quotes.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import './style/slider.scss'
import fire from '../fire'
import Admin from './Admin';
//import '../MainPage/page.css'


const Connexion = (props)=> {

    const{ 
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasaccount,
    setHasaccount,
    emailerror,
    passworderror,
    } = props;
    
    return(
        <>
        <div class="slider_secondary">
                <div class="single_slider  d-flex align-items-center slider_bg_1">
                    <div class="container">
                        <div  class="row align-items-center">
                            <div class="col-lg-7 col-md-6">
                                <div class="slider_text" >
                                    <h3 >Accéder à votre compte</h3>
                                    <p data-wow-duration="1s" data-wow-delay=".4s">L'unique répertoire de stages et de stagiaires au Québec</p>
                                   </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ilstration_img  d-none d-lg-block text-right" >
                <img src={sign} alt="ava" />
                </div>
                
                <Link to={"/Accueil"}>
                            <p style={{fontWeight:'500', color: 'rgb(168, 168, 177)'}}>  <ArrowLeftIcon/> Retourner à la page d'Accueil</p>
                            </Link>
            </div>
            <div style={{paddingBottom: '40px'}}>
            <Grid container spacing={3}>
                <Grid item lg={12} xs={12}>
                <Container  xs={6} component="main" maxWidth="xs">
              <CssBaseline />
              <div >
                <Avatar >
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Identification
                </Typography>
           
                <form >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <p className="errorMessage">{emailerror}</p>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <p className="errorMessage">{passworderror}</p>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Se souvenir de moi"
                  />
                  {hasaccount ? (
                   <>
                   <Button
                    //hasaccount={hasaccount}
                    onClick={handleLogin}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor:'#3c82df',color: 'white'}}
                  >
                 S'identifier
                  </Button>
                  <p>Pas d'account? <Link  style={{fontWeight: 'bold',color: '#1E90FF'}} onClick={() => setHasaccount(!hasaccount)}>S'inscrire</Link></p>
                   </>
                  ) : (
                    <>
                    <Button
                     //hasaccount={hasaccount}
                     onClick={handleSignup}
                     type="submit"
                     fullWidth
                     variant="contained"
                     color="primary"
                     style={{ backgroundColor:'#3c82df',color: 'white'}}
                   >
                     S'inscrire
                   </Button>
                   <p>Vous avez une account? <Link style={{fontWeight: 'bold',color: '#1E90FF'}} onClick={() => setHasaccount(!hasaccount)}>S'identifier</Link></p>
                    </>
                  )}
                </form>
              </div>
            </Container>
                </Grid>
         <Grid item xs={12}>
                <div class="section-top-border">
                        <div class="row">
                            <div class="col-md-3">
                                <img  src={myimage} alt="" class="img-fluid"/>
                            </div>
                            <div class="col-md-9 mt-sm-20 info">
                                <p style={{fontWeight:'500', color: 'rgb(168, 168, 177)'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".
                  </p>
                                    <div class="slider_text">
                                        <hr/>
                                    <h6>Copyright © Vadim Lityuk 2021.</h6>
                                </div>
                            </div>     
                        </div>
               </div>
            </Grid>
              </Grid>
            </div>
          </>
    )
 }
 
 
 
 export default Connexion;