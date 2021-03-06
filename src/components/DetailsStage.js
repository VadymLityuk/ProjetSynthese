import React from "react";
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom'
import myimage from '../images/6.svg'
import stager from '../images/stager.png'
import office from '../images/office.png'
import './style/main.css'
import './style/quotes.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import {useState} from 'react'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Typography from '@material-ui/core/Typography';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './style/offre.scss'
import './style/slider.scss'
import './style/jobdetails.scss'

import Header from './Header'
import Footer from './Footer'
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

  export default function DetailsStage() {
    const classes = useStyles();

  
    const[searchTerm,setSearchTerm] = useState('')




    return (
    <>
    <Header/>
         <div className={classes.root} >
      <Grid container spacing={3} style={{backgroundColor: '#F5F7FA'}}>
        <Grid item xs={12}>
        <div class="slider_secondary">
        <div class="single_slider  d-flex align-items-center slider_bg_1">
            <div class="container">
                <div  class="row align-items-center">
                    <div class="col-lg-7 col-md-6">
                        <div class="slider_text" >
                            <h4 style={{color:'white',fontSize: '44px'}}>
                                Offre de Stage 
                            </h4>
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
        
    <div class="bradcam_area bradcam_bg_1">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="bradcam_text">
                    <Link to={"/Offre"}>
                    <p style={{fontWeight:'500', color: 'rgb(168, 168, 177)'}}>  <ArrowLeftIcon/> Retour ?? la page de toutes les offres</p>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
       {/* Page d'offres de stage  */}
    <div class="job_details_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="job_details_header">
                        <div class="single_jobs white-bg d-flex justify-content-between">
                            <div class="jobs_left d-flex align-items-center">
                                <div class="thumb">
                                    <img style={{maxWidth: '120px'}} src="https://thenetmencorp.com/wp-content/uploads/2017/08/y05-1.jpg" alt=""/>
                                </div>
                                <div class="jobs_conetent">
                                    <h4>Front-End Developpeur</h4>
                                    <div class="links_locat d-flex align-items-center">
                                        <div class="location">
                                        <p style={{color: 'gray'}}>
                                       <LocationOnIcon  style={{color: 'lightgray',padding:'2px'}}/>
                                       Quebec,QC
                                        </p>
                                        </div>
                                        <div class="location">
                                        <p style={{color: 'gray'}}>
                                      <AccessTimeIcon style={{color: 'lightgray',padding:'2px'}}/> 
                                      Tepms plein
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="jobs_right">
                                <div class="apply_now">
                                    <a class="heart_mark" > <FavoriteIcon/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="descript_wrap white-bg">
                        <div class="single_wrap">
                            <h4>Description de stage</h4>
                            <p> Il existe de nombreuses variantes de passages du Lorem Ipsum disponibles, mais la majorit?? ont subi des alt??rations sous une forme ou une autre, par de l'humour inject?? ou des mots al??atoires qui ne semblent m??me pas l??g??rement cr??dibles. Si vous comptez utiliser un passage du Lorem Ipsum, vous devez ??tre s??r qu'il n'y a rien de g??nant. </p>
                             <p> Variations de passages de lorem Ipsum disponibles, mais la majorit?? ont subi des alt??rations sous une forme ou une autre, par injection d'humour, ou par des mots al??atoires qui ne semblent m??me pas l??g??rement cr??dibles. Si vous comptez utiliser un passage du Lorem Ipsum, vous devez ??tre s??r qu'il n'y a rien de g??nant. </p>
                             </div>
                        <div class="single_wrap">
                        <h4> Responsabilit?? </h4>
                             <ul>
                                 <li> Les candidats doivent avoir une exp??rience dans les domaines suivants.
                                 </li>
                                 <li> Avoir une bonne connaissance des activit??s commerciales. </li>
                                 <li> Capacit??s de leadership, d'analyse et de r??solution de probl??mes </li>
                                 <li> Doit avoir de vastes connaissances en .... </li>
                             </ul>
                        </div>
                        <div class="single_wrap">
                        <h4> Qualifications </h4>
                             <ul>
                                 <li> Les candidats doivent avoir une exp??rience dans les domaines suivants.
                                 </li>
                                 <li> Avoir une bonne connaissance des activit??s commerciales. </li>
                                 <li> Capacit??s de leadership, d'analyse et de r??solution de probl??mes </li>
                                 <li> Doit avoir de vastes connaissances en ... </li>
                             </ul>
                        </div>
                        <div class="single_wrap">
                        <h4> Avantages </h4>
                             <p> Il existe de nombreuses variantes de passages du Lorem Ipsum disponibles, mais la majorit?? ont subi des alt??rations sous une forme ou une autre, par de l'humour inject?? ou des mots al??atoires qui ne semblent m??me pas l??g??rement cr??dibles. Si vous comptez utiliser un passage du Lorem Ipsum, vous devez ??tre s??r qu'il n'y a rien de g??nant. </p>  
                             </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="job_sumary">
                        <div class="summery_header">
                            <h3>R??sum?? du poste</h3>
                        </div>
                        <div class="job_content">
                            <ul>
                              <li> Publi?? le: <span> 22 Mars 2020</span> </li>
                                 <li> Poste vacant: <span> 3 postes </span> </li>
                                 <li> Emplacement: <span> Quebec,QC </span> </li>
                            </ul>
                        </div>
                    </div>
                    <div class="share_wrap d-flex">
                        <span>Partagez sur:</span>
                        <ul>
                                    <li>
                                    <a >
                                    <InstagramIcon/>
                                        </a>
                                    </li>
                                    <li>
                                        <a >
                                         <TwitterIcon/>
                                        </a>
                                    </li>
                                    <li>
                                        <a >
                                         <FacebookIcon/>
                                        </a>
                                    </li>
                                    <li>
                                        <a >
                                          <PinterestIcon/>
                                        </a>
                                    </li>
                        </ul>
                    </div>
                    <div class="job_location_wrap">
                        <div class="job_lok_inner">
                            <div id="map"></div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
      </Grid>
    </div>
    <Footer/>
    </>
    );
  }

 