import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import './style/main.css'
import './style/footer.scss'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import logo from '../images/logo.png'

function Copyright() {
    return (
      <Typography variant="body2" style={{fontWeight: 'bold'}} color="white" align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
        <Link color="inherit" href="https://github.com/VadymLityuk">
             <> </>Vadim Lityuk
        </Link>{' '}
        {'| All rights Reserved'}
      </Typography>
    );
  }

export default function Footer() {
 // const classes = useStyles();

  return (
      <>
       <footer class="footer">
        <div class="footer_top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-md-6 col-lg-3">
                        <div class="footer_widget wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div class="footer_logo">
                                <a href="#">  
                                   <img src={logo} alt=""/>
                                     </a>
                            </div>
                            <p> 
                                vad@support.com <br/>
                                +1 581 672 6782 <br/>
                            </p>
                            <div class="socail_links">
                                <ul>
                                    <li>
                                    <a href="#">
                                    <InstagramIcon/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                         <TwitterIcon/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                         <FacebookIcon/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                          <PinterestIcon/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-md-6 col-lg-2">
                        <div class="footer_widget wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".4s">
                            <h3 class="footer_title">
                            E Stages
                            </h3>
                            <ul>
                                <li><a href="#">À propos de nous</a></li>
                                <li><a href="#"> Tarification</a></li>
                                <li><a href="#">S'abonner</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>

                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 col-lg-3">
                        <div class="footer_widget wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".5s">
                            <h3 class="footer_title">
                            Catégorie 
                            </h3>
                            <ul>
                                <li><a href="#">Programmation</a></li>
                                <li><a href="#">Ingénierie</a></li>
                                <li><a href="#">Ventes et Marketing</a></li>
                                <li><a href="#">Finance</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 col-lg-4">
                        <div class="footer_widget wow fadeInUp" data-wow-duration="1.3s" data-wow-delay=".6s">
                            <h3 class="footer_title">
                            Nous joindre
                            </h3>
                            <form action="#" class="newsletter_form">
                                <input type="text" placeholder="Entrez l'email"/>
                                <button type="submit">Envoyer</button>
                            </form>
                            <p class="newsletter_text">Le service de support vous contactera dans les plus brefs délais</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copy-right_text wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".3s">
            <div class="container">
                <div class="footer_border"></div>
                <div class="row">
                    <div class="col-xl-12">
                        <p class="copy_right text-center">
                        <Copyright />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer> 


    </>
  );
}