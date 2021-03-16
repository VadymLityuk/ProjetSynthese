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
import sign from '../images/sign.png'
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

const jobs = [
    {
      value: '1',
      label: 'Developpeur',
    },
    {
        value: '2',
        label: 'Maneger',
    },
    {
        value: '3',
        label: 'Developpeur',
    },
    {
        value: '4',
        label: 'Developpeur',
    },
  ];

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

    const [currency, setCurrency] = React.useState('EUR');
  
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };



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
        {/* <img src={sign} alt="ava" />   */}
        </div>
    </div>
        </Grid>
        <Grid item lg={12} xs={12}>
     
        <div class="col-lg-9">
                    <div class="recent_joblist_wrap">
                        <div class="recent_joblist white-bg ">
                        <div class="slider_text" >
                            <h3>Trouves votre stage
                            </h3>
                           </div>
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                </div>
                                <div class="col-md-6">
                                    <div class="serch_cat d-flex justify-content-end">
                                    <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Le plus récent"
                                        value={currency}
                                        onChange={handleChange}
                                  SelectProps={{
                                     native: true,
                                              }}
                                        helperText="Veuillez sélectionner vos emplois"
                                        variant="outlined"
                                        >
                                  {jobs.map((option) => (
                           <option key={option.value} value={option.value}>
                                 {option.label}
                           </option>
                                    ))}</TextField>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </Grid>
        <Grid item lg={4} xs={12}>
        <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between" style={{backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb" style={{paddingRight: '6px',marginBottom: '6px'}}>
                                            <img src={myimage} alt=""/> 
                                        </div>
                                        <div class="jobs_conetent">
                                            <a href="job_details.html"><h5>Front End Développeur</h5></a>
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
                                            <a class="heart_mark" href="#"><FavoriteIcon /></a>
                                            <Button href="job_details.html" class="boxed-btn3" variant="contained">Apply Now</Button>
                                        </div>
                                        <div class="date">
                                            <p>31 Mars 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </Grid>
        <Grid item lg={4} xs={12}>
        <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between" style={{backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb" style={{paddingRight: '6px',marginBottom: '6px'}}>
                                            <img src={myimage} alt=""/> 
                                        </div>
                                        <div class="jobs_conetent">
                                            <a href="job_details.html"><h5>Front End Développeur</h5></a>
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
                                            <a class="heart_mark" href="#"><FavoriteIcon /></a>
                                            <Button href="job_details.html" class="boxed-btn3" variant="contained">Apply Now</Button>
                                        </div>
                                        <div class="date">
                                            <p>31 Mars 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </Grid>
        <Grid item lg={4} xs={12}>
        <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between" style={{backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb" style={{paddingRight: '6px',marginBottom: '6px'}}>
                                            <img src={myimage} alt=""/> 
                                        </div>
                                        <div class="jobs_conetent">
                                            <a href="job_details.html"><h5>Front End Développeur</h5></a>
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
                                            <a class="heart_mark" href="#"><FavoriteIcon /></a>
                                            <Button href="job_details.html" class="boxed-btn3" variant="contained">Apply Now</Button>
                                        </div>
                                        <div class="date">
                                            <p>31 Mars 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a style={{padding: '18px'}}>voir plus</a>
        </Grid>
       
        <Grid item lg={12} xs={12}>
        <hr/>
        <div class="col-lg-9" >
                    <div class="recent_joblist_wrap">
                        <div class="recent_joblist white-bg ">
                        <div class="slider_text" >
                            <h3>Trouves des stagiaires
                            </h3>
                           </div>
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                </div>
                                <div class="col-md-6">
                                    <div class="serch_cat d-flex justify-content-end">
                                    <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Le plus récent"
                                        value={currency}
                                        onChange={handleChange}
                                  SelectProps={{
                                     native: true,
                                              }}
                                        helperText="Veuillez sélectionner vos emplois"
                                        variant="outlined"
                                        >
                                  {jobs.map((option) => (
                           <option key={option.value} value={option.value}>
                                 {option.label}
                           </option>
                                    ))}</TextField>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </Grid>
        <Grid item lg={4} xs={12}>
        <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between" style={{backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb" style={{paddingRight: '6px',marginBottom: '6px'}}>
                                            <img src={myimage} alt=""/> 
                                        </div>
                                        <div class="jobs_conetent">
                                            <a href="job_details.html"><h5>Front End Développeur</h5></a>
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
                                            <a class="heart_mark" href="#"><FavoriteIcon /></a>
                                            <Button href="job_details.html" class="boxed-btn3" variant="contained">Apply Now</Button>
                                        </div>
                                        <div class="date">
                                            <p>31 Mars 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </Grid>
        <Grid item lg={4} xs={12}>
        <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between" style={{backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb" style={{paddingRight: '6px',marginBottom: '6px'}}>
                                            <img src={myimage} alt=""/> 
                                        </div>
                                        <div class="jobs_conetent">
                                            <a href="job_details.html"><h5>Front End Développeur</h5></a>
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
                                            <a class="heart_mark" href="#"><FavoriteIcon /></a>
                                            <Button href="job_details.html" class="boxed-btn3" variant="contained">Apply Now</Button>
                                        </div>
                                        <div class="date">
                                            <p>31 Mars 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </Grid>
        <Grid item lg={4} xs={12}>
        <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between" style={{backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb" style={{paddingRight: '6px',marginBottom: '6px'}}>
                                            <img src={myimage} alt=""/> 
                                        </div>
                                        <div class="jobs_conetent">
                                            <a href="job_details.html"><h5>Front End Développeur</h5></a>
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
                                            <a class="heart_mark" href="#"><FavoriteIcon /></a>
                                            <Button href="job_details.html" class="boxed-btn3" variant="contained">Apply Now</Button>
                                        </div>
                                        <div class="date">
                                            <p>31 Mars 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a style={{padding: '18px'}}>voir plus</a>
        </Grid>
      </Grid>
      
    </div>
    
    
    </>
    );
  }

 