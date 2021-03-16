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
import {NavLink} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import myimage from '../images/6.svg'
import stager from '../images/stager.png'
import office from '../images/logoban.png'
import './style/main.css'
import './style/quotes.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuItem from '@material-ui/core/MenuItem';
import MYDATA from '../liststage.json'
import CANDIDAT from '../candidats.json'
import ShareIcon from '@material-ui/icons/Share';
import apropos from '../images/apropos.png'
import './style/offre.scss'
import {useState} from 'react'
import './style/slider.scss'
//import '../MainPage/page.css'


const avatar= {
  avatar: require("../images/ava2.JPG"),
};

const useStyles = makeStyles((theme) => ({

    root: {
         flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.success.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      
      identity: {
        margin: theme.spacing(6.1),
      },
  }));

  export default function OffreStage() {
    const classes = useStyles();

    const [searchTerm,setSearchTerm] = useState('');
    const [searchCandidat,setSearchCandidat] = useState('');
    
    return (
    <>
         <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <div class="slider_secondary">
        <div class="single_slider  d-flex align-items-center slider_bg_1">
            <div class="container">
                <div  class="row align-items-center">
                    <div class="col-lg-7 col-md-6">
                        <div class="slider_text" >
                            <h3>Trouves votre stage ou des stagiaires
                            </h3>
                            <p >Pellentesque vehicula fermentum turpis eu cursus. Cras convallis tellus et elit aliquet, vitae dignissim ligula sodales. 
                            </p>
                           </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ilstration_img  d-none d-lg-block text-right" >
        <img src={apropos} alt="ava" />   
        </div>
    </div>
        </Grid>
        <Grid item lg={12} xs={12}>
        <div class="col-lg-9">
                    <div class="recent_joblist_wrap">
                        <div class="recent_joblist white-bg ">
                        <div class="slider_text" >
                            <h3 >Trouves votre stage
                            </h3>
                            <div class="col-lg-6">
                                        <div class="single_field">
                          <input style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} type="text" placeholder="Recherche par profession..."
                           onChange={event =>{
                            setSearchTerm(event.target.value);
                               }}/> 
                        </div>
                           </div>   
                           </div>
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                </div>
                                <div class="col-md-6">
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </Grid>
        {MYDATA.filter((val)=>{
            if(searchTerm == ""){
                return val 
            } else if (val.jobtitle.toLowerCase().includes(searchTerm.toLowerCase())){ 
            return val 
            }
        }).map((val,key)=>{
        return ( 
           <> 
        <Grid item lg={4} xs={12}>
        <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between" style={{backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb" style={{paddingRight: '6px',marginBottom: '6px'}}>
                                            <img style={{maxWidth: '100px',maxHeight: '100px'}} src={val.img} alt=""/> 
                                        </div>
                                        <div class="jobs_conetent">
                                            <a ><h6>{val.jobtitle}</h6></a>
                                            <a ><h8>{val.companyname}</h8></a>
                                            <div class="links_locat d-flex align-items-center">
                                                <div class="location">
                                                    <p style={{color: 'gray',padding:'2px'}}>
                                                    <LocationOnIcon  style={{color: 'lightgray',padding:'2px'}}/>
                                                     {val.city}</p>
                                                </div>
                                                <div class="location" style={{color: 'gray'}}>
                                                    <p><AccessTimeIcon style={{color: 'lightgray',padding:'2px'}}/> 
                                                    {val.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jobs_right">
                                        <div class="apply_now">
                                            <a class="heart_mark" ><FavoriteIcon /></a>
                                            <a class="heart_mark" ><ShareIcon /></a>
                                        </div>
                                        <div class="date">
                                            <p>{val.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>   
        </Grid>
        </>
          )})}
        <Grid item lg={12} xs={12}>
            <Link to={"/Stages"}>
                <div style={{padding: '13px'}}>
        <Button style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} class="boxed-btn3" variant="contained" >voir tous les offres</Button>
        </div>
        </Link>
        <hr/>
        <div class="col-lg-9" >
                    <div class="recent_joblist_wrap">
                        <div class="recent_joblist white-bg ">
                        <div class="slider_text" >
                            <h3>Trouves des stagiaires
                            </h3>
                            <div class="col-lg-6">
                                        <div class="single_field">
                          <input style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} type="text" placeholder="Recherche par profession..."
                           onChange={event =>{
                            setSearchCandidat(event.target.value);
                               }}/> 
                        </div>
                           </div>   
                           </div>
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                </div>
                                <div class="col-md-6">
                                  
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </Grid>
        {CANDIDAT.filter((val)=>{
            if(searchCandidat == ""){
                return val  //searchCandidat,setSearchCandidat
            } else if (val.jobtitle.toLowerCase().includes(searchCandidat.toLowerCase())){
            return val 
            }
        }).map((val,key)=>{
        return ( 
           <>
        <Grid item lg={4} xs={12}>
        <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between" style={{backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb">
                                            <img style={{maxWidth: '100px',maxHeight: '80px'}}src={val.img} alt=""/> 
                                        </div>
                                        <div class="jobs_conetent">
                                            <a ><h5 style={{paddingLeft:'5px'}}>{val.name}</h5></a>
                                            <a ><h8 style={{paddingLeft:'8px',color:'#00D363'}}>{val.jobtitle}</h8></a>
                                            <div class="links_locat d-flex align-items-center">
                                                <div class="location">
                                                    <p style={{color: 'gray'}}>
                                                    <LocationOnIcon  style={{color: 'lightgray',padding:'2px'}}/>
                                                    {val.city}</p>
                                                </div>
                                                <div class="location" style={{color: 'gray'}}>
                                                    <p><AccessTimeIcon style={{color: 'lightgray',padding:'2px'}}/> 
                                                    {val.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jobs_right">
                                        <div class="apply_now">
                                            <a class="heart_mark" ><FavoriteIcon /></a>
                                            <Button  class="boxed-btn3" variant="contained">Apply Now</Button>
                                        </div>
                                        <div class="date">
                                            <p>{val.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </Grid>
        </>
           )})}
        <hr/>
    <div class="section-top-border">
        
    <Link  to={"/Stages"}>
                <div style={{padding: '29px'}}>
        <Button style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} class="boxed-btn3" variant="contained">voir tous les stagiaires</Button>
        </div>
        </Link>
				<div class="row">
					<div class="col-md-3">
						<img   src={office} alt="" class="img-fluid"/>
					</div>
					<div class="col-md-9 mt-sm-20 info">
                    <h5 > Étudiants</h5>
						<p style={{fontWeight:'500', color: 'rgb(168, 168, 177)'}}>
                        Crée ton compte gratuitement pour mettre en valeur ta candidature
                        Sois visible auprès des entreprises
                        Consulte et postule pour les offres de stages et des emplois
                        Trouve rapidement le stage qui te ressemble, à la hauteur de tes ambitions dans ta région d'étude ou à l'extérieur
                        Découvrir un monde de possibilités!
                        </p>
                        <h5 >Travailleur/chercheur d'emploi</h5>
                       <p style={{fontWeight:'500', color: 'rgb(168, 168, 177)'}}>
                        Crée ton compte gratuitement pour préciser tes champs d'intérêts de requalification
                        Sois visible auprès des entreprises à la recherche de talents
                        Trouve un nouveau métier qui rejoint tes ambitions dans ta région ou à l'extérieur pour lequel une entreprise participera activement à ta formation
                        Découvrir un monde de possibilités!
                       </p>
                            <div class="slider_text">
                                <hr/>
                            <h6>S'inscrire ou se connecter</h6>
                            <Link  to={"/Apropos"}>
                            <Button variant="contained" style={{ backgroundColor:'#3c82df',color: 'white'}}>
                            Accéder à votre compte 
                            </Button>    
                            </Link> 
                        </div>
					</div>
				</div>
        </div>
      </Grid>
      
    </div>
    
    
    </>
    );
  }

 