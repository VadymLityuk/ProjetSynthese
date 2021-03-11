import React from "react";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Avatar from '@material-ui/core/Avatar';


import './style/main.css'
import './style/quotes.css'


//import '../MainPage/page.css'


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
                            <h3  data-wow-duration="1s" data-wow-delay=".3s">Trouves votre stage!</h3>
                            <p data-wow-duration="1s" data-wow-delay=".4s">We provide online instant cash loans with quick approval that suit your term length</p>
                            <Button variant="outlined" color="primary">
                                     Primary
                            </Button>
                        </div>
                    </div>
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
                        <p>Nous fournissons des prêts de trésorerie instantanés en ligne avec une approbation rapide </p>
                        <a href="#" class="boxed-btn3">Browse Job</a>
                    </div>
                </div>
                <div class="col-lg-5 offset-lg-1 col-md-6">
                    <div class="searching_text">
                        <h3>Looking for a Expert?</h3>
                        <p>We provide online instant cash loans with quick approval </p>
                        <a href="#" class="boxed-btn3">Post a Job</a>
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
                        <h3>Testimonial</h3>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="testmonial_active owl-carousel">
                        <div class="single_carousel">
                            <div class="row">
                                <div class="col-lg-11">
                                    <div class="single_testmonial d-flex align-items-center">
                                        <div class="thumb">
                                          <Avatar src="" ></Avatar>
                                        </div>
                                        <div class="info">
                                            <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food.</p>
                                            <span>- Micky Mouse</span>
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

 

