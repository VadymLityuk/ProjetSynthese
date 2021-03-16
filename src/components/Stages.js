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
import office from '../images/office.jpg'
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

import './style/offre.scss'
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

  export default function Stages() {
    const classes = useStyles();

    const [currency, setCurrency] = React.useState('EUR');
  
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };



    return (
    <>
         <div className={classes.root} >
      <Grid container spacing={3} >
        <Grid item xs={12}>
        <div class="slider_secondary">
        <div class="single_slider  d-flex align-items-center slider_bg_1">
            <div class="container">
                <div  class="row align-items-center">
                    <div class="col-lg-7 col-md-6">
                        <div class="slider_text" >
                            <h3>Offre de Stage
                            </h3>
                            <p >Pellentesque vehicula fermentum turpis eu cursus. Cras convallis tellus et elit aliquet, vitae dignissim ligula sodales. 
                            </p>
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
        <Grid item lg={3} xs={3}>
                    <div class="job_filter">
                        <div className="job_filter form_inner white-bg">
                            <div >
                        <h3 style={{textAlign: 'center',color: 'gray'}}>Filtre de Recherche</h3>
                        </div>
                        <hr/>
                            <form  style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',borderRadius: '9px'}}>
                                <div class=" job_filter row">
                                    <div class="job_filter col-lg-12">
                                        <div class="single_field">
                                            <input type="text" placeholder="Mot-clé de recherche"/>
                                        </div>
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
                        <div class="reset_btn">
                            <button  class="boxed-btn3 w-100" type="submit">Recherche</button>
                        </div>
                    </div>
                </Grid>
        <Grid item lg={9} xs={12}>
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
                                            <a class="heart_mark"><FavoriteIcon /></a>
                                            <Button class="boxed-btn3" variant="contained">Apply Now</Button>
                                        </div>
                                        <div class="date">
                                            <p>31 Mars 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
    
    
    </>
    );
  }

 