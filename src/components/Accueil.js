import React from "react";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import myimage from '../images/avatar.jpg'
import office from '../images/office.jpg'
import { makeStyles } from '@material-ui/core/styles';
import './style/main.css'
import './style/quotes.css'

import './style/slider.scss'


//import '../MainPage/page.css'

const avatar= {
  avatar: require("../images/ava2.JPG"),
};


export class Accueil extends React.Component {

//
//<Deconnexion className="dec" onClick={this.verifierConnexion}/>
constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }



  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
    <>
    
    <div class="slider_area">
        <div class="single_slider  d-flex align-items-center slider_bg_1">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-6">
                        <div class="slider_text">
                            <h3  data-wow-duration="1s" data-wow-delay=".3s">Trouves votre stage Aujourd'hui!</h3>
                            <p data-wow-duration="1s" data-wow-delay=".4s">L'unique répertoire de stages et de stagiaires au Québec.Trouves votre stage ou des stagiaires </p>
                            <Link to={"/Offre"}>
                            <Button variant="contained" style={{backgroundColor: 'rgb(0, 211, 99)',color: 'white'}}>
                            Trouve un stage
                            </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ilstration_img  d-none d-lg-block text-right" >
        <img src={myimage} alt="ava" />
        </div>
    </div>
    <div class="section-top-border">
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
    <div class="job_searcing_wrap overlay">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 offset-lg-1 col-md-6">
                    <div class="searching_text">
                        <h3>À la recherche d'un stage?</h3>
                        <p>L'unique répertoire de stages et de stagiaires au Québec </p>
                        <Button style={{backgroundColor: '#00D363',color: 'white' }} variant="contained" href="#" >Trouve un stage</Button>
                    </div>
                </div>
                <div class="col-lg-5 offset-lg-1 col-md-6">
                    <div class="searching_text">
                        <h3>Recherche d'un candidat?</h3>
                        <p>L'unique répertoire de stages et de stagiaires au Québec </p>
                        <Button style={{color: 'white'}} href="#" >Trouve un candidat</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div class="testimonial_area  ">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section_title text-center mb-40">
                        <h3>Avis et commentaires</h3>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="testmonial_active owl-carousel">
                        <div class="single_carousel">
                            <div class="row">
                                <div class="col-lg-11">
                                    <div class="single_testmonial d-flex align-items-center">
                                        <div class="thumb">
                                          <img src={myimage} alt="ava" />
                                        </div>
                                        <div class="info">
                                            <p >"L'avis positif est le résultat d'un travail bien fait. Sa quête est vaine si l'artisan n'a pu réaliser une prestation qualitative en amont. La base est donc avant tout de s'assurer tout au long de la prestation, le bon déroulement des travaux et d'offrir un service client de qualité."</p>
                                            <span>- Mademoiselle Mademoiselle</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    
    </>
    );
  }
}

 

