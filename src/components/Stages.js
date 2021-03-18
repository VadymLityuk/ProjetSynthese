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

import Header from './Header'
import Footer from './Footer'
import './style/offre.scss'
import './style/slider.scss'

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

  export default function Stages() {
    const classes = useStyles();

  
    const[searchTerm,setSearchTerm] = useState('')




    return (
    <>
    <Header/>
         <div className={classes.root} >
      <Grid container spacing={3} >
        <Grid item xs={12}>
        <div class="slider_secondary">
        <div class="single_slider  d-flex align-items-center slider_bg_1">
            <div class="container">
                <div  class="row align-items-center">
                    <div class="col-lg-7 col-md-6">
                        <div class="slider_text" >
                            <h4 style={{color:'white',fontSize: '44px'}}>
                            Trouvez votre stage aujourd'hui!  
                            </h4>
                            <div class="col-lg-12">
                                        <div class="single_field">
                          <input style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} type="text" placeholder="Mot-clé de recherche.."
                           onChange={event =>{
                               setSearchTerm(event.target.value);
                               }}/> 
                        </div>
                           </div>   
                           </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ilstration_img  d-none d-lg-block text-right" >
        {/* <img src={sign} alt="ava" />   */}
        </div>
    </div>
        </Grid>
        <Grid item lg={3} xs={12}>
                    <div class="job_filter">
                        <Link to={"/Offre"}>
                    <p style={{fontWeight:'500', color: 'rgb(168, 168, 177)'}}>  <ArrowLeftIcon/> Retour à la page de toutes les offres</p>
                    </Link>
                        <div className="job_filter form_inner white-bg">   
                            <form  style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',borderRadius: '9px'}}>
                             
                                <div class=" job_filter row">
                                    <div class="job_filter col-lg-12">
                        <h3 style={{textAlign: 'center',color: 'gray'}}>Filtre de Recherche</h3>
                                    </div>
                                    <div class="col-lg-12">
                                        <div className="single_field">
                                            <select style={{color: 'gray'}} class="job_filter wide">
                                                <option data-display=" job_filter Location">Location</option>
                                                <option value="1">Quebec</option>
                                                <option value="2">Montreal </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div className="single_field">
                                            <select  style={{color: 'gray'}} className="job_filter wide">
                                                <option data-display="Job type">Permanant</option>
                                                <option value="1">Temps Plein</option>
                                                <option value="2">Temps partiel</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div className="single_field">
                                            <select style={{color: 'gray'}} className="job_filter wide">
                                                <option data-display="Job type">Job type</option>
                                                <option value="1">full time 1</option>
                                                <option value="2">part time 2 </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="reset_btn" style={{textAlign: 'center'}}>
                            <Button variant="contained" style={{backgroundColor:'#00D363',color:'white'}}>Recherche</Button>
                        </div>
                    </div>
                </Grid>
        <Grid item lg={9} xs={12}>
        {DATA.filter((val)=>{
            if(searchTerm == ""){
                return val
            } else if (val.jobtitle.toLowerCase().includes(searchTerm.toLowerCase())){
            return val 
            }
        }).map((val,key)=>{
        return ( 
        <div class="col-lg-12 col-md-12">
        <div class="single_jobs white-bg d-flex justify-content-between" style={{backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <div class="jobs_left d-flex align-items-center">
                <div class="thumb" style={{paddingRight: '6px',marginBottom: '6px'}}>
                    <img style={{maxWidth:'150px',maxHeight: '100px'}} src={val.img} alt=""/> 
                </div>
                
                <div class="jobs_conetent">
                    <a ><h5 style={{color: 'rgb(0, 211, 99)'}}>{val.jobtitle}</h5></a>
                    <a ><h6 >{val.companyname}</h6></a>
                    <div class="links_locat d-flex align-items-center">
                   
                        <div class="location">
                            <p style={{color: 'gray',padding:'2px'}}>
                            <LocationOnIcon  style={{color: 'lightgray',padding:'2px'}}/>
                            {val.city}</p>
                        </div>
                        <div class="location" style={{color: 'gray',padding:'2px'}}>
                            <p><AccessTimeIcon style={{color: 'lightgray',padding:'2px'}}/> 
                            {val.time}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jobs_right">
                <div class="apply_now">
                    <a class="heart_mark"><FavoriteIcon /></a>
                    <Link to={"/DetailsStage"}>
                    <Button class="boxed-btn3" variant="contained">Détails</Button>
                    </Link>
                </div>
                <div class="date">
                    <p> {val.date}</p>
                </div>
            </div>
        </div>
    </div>
        )
         })}
      
        </Grid>
      {/* <Grid item lg={9} xs={9}>
        <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between" style={{backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb" style={{paddingRight: '6px',marginBottom: '6px'}}>
                                            <img src={myimage} alt=""/> 
                                        </div>
                                        <div class="jobs_conetent">
                                            <a ><h5>Front End Développeur</h5></a>
                                            <div class="links_locat d-flex align-items-center">
                                                <div class="location">
                                                    <p style={{color: 'gray',padding:'2px'}}>
                                                    <LocationOnIcon  style={{color: 'lightgray',padding:'2px'}}/>
                                                     Québec, QC</p>
                                                </div>
                                                <div class="location" style={{color: 'gray',padding:'2px'}}>
                                                    <p><AccessTimeIcon style={{color: 'lightgray',padding:'2px'}}/> 
                                                    Temps partiel</p>
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
                                            <p>31 Mars 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </Grid>
        */} 
      </Grid>
    </div>
    <Footer/>
    </>
    );
  }

 