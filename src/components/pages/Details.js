import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import stager from '../../images/avatar.jpg'
import {useState} from 'react'
import SchoolIcon from '@material-ui/icons/School';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import EmailButton from './EmailButton'




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


  export default function Details() {
    const classes = useStyles();
   
    const[searchTerm,setSearchTerm] = useState('');


    return (
    <>
         <div className={classes.root} >
      <Grid  spacing={1} style={{backgroundColor: '#F5F7FA',padding: '52px 42px 42px 42px'}}>
        <Grid item xs={12}>
        </Grid>
       {/* Page d'offres de stage  */}
    <div class="job_details_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="job_details_header">
                        <div class="single_jobs white-bg d-flex justify-content-between">
                            <div class="jobs_left d-flex align-items-center">
                                <div style={{padding: '22px'}}>
                               <SchoolIcon style={{color: 'lightgray'}}/>
                               <h3>John Doe</h3>
                                <hr/>
                                    <img style={{width: '200px'}} src={stager} alt=""/>
                                </div>
                                <hr/>
                                <div class="jobs_conetent">
                                     <p style={{color:'lightgray',fontWeight: 'bold'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                             </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="descript_wrap white-bg">
                        <div >
                                  <ul >
                                        <li style={{ color: 'black',fontSize: '14px',lineHeight: '12px',fontWeight: 'bold'}} >
                                        Établissement scolaire : <a style={{ color: 'gray',fontSize: '14px',lineHeight: '12px',fontWeight: 'bold'}}> Cégep de Trois-Rivières</a>
                                        </li>
                                        <hr/>
                                        <li style={{ color: 'black',fontSize: '14px',lineHeight: '12px',fontWeight: 'bold'}}  >
                                        Programme de formation :<a style={{ color: 'gray',fontSize: '14px',lineHeight: '12px',fontWeight: 'bold'}}> Développement Web </a>
                                        </li>
                                        <hr/>
                                        <li style={{ color: 'black',fontSize: '14px',lineHeight: '12px',fontWeight: 'bold'}}  >
                                        Courriel : <a style={{ color: 'gray',fontSize: '14px',lineHeight: '12px',fontWeight: 'bold'}}> john@doe.com</a>
                                        </li>
                                        <hr/>
                                        <li style={{ color: 'black',fontSize: '14px',lineHeight: '12px',fontWeight: 'bold'}}  >
                                        Téléphone :<a style={{ color: 'gray',fontSize: '14px',lineHeight: '12px',fontWeight: 'bold'}}> 819 991 9911</a>
                                        </li>
                                        <hr/>
                                        <li style={{ color: 'black',fontSize: '14px',lineHeight: '12px',fontWeight: 'bold'}}  >
                                        Ville :<a style={{ color: 'gray',fontSize: '14px',lineHeight: '12px',fontWeight: 'bold'}}> Shawinigan </a>
                                        </li>
                                        <hr/>
                                    </ul>
                    </div>
                </div>
            </div>
            <div class="col-xl-12 col-md-12 col-lg-12">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                            Communiquer avec le candidat
                            </h3>
                            <form action="#" className="myForm">
                            <TextareaAutosize aria-label="minimum height" rowsMin={11}  style={{height: '150px',  outline: '0',
                            transition: 'border-color 0.2s',border: '2px solid lightgray',borderRadius: '9px',width: '100%'}}/>   
                            <EmailButton/>
                            </form>
                        </div>
                    </div>
        </div>
    </div>
      </Grid>
    </div>
    </>
    );
  }

 