import React, {useState} from 'react';
import '../App/App.scss';
import {Accueil} from '../Accueil'
import Apropos from '../Apropos'
import OffreStage from '../OffreStage'
import Stages from '../Stages'
import Stagier from '../Stagers'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation,withRouter, Route, Switch } from "react-router-dom";
import DetailsStage from '../DetailsStage'
import DetailsStagiers from '../DetailsStagiers'
import Contact from '../Contact'
import Admin from '../Admin';

function App() {

  
  return (
   <>
   {/*
      props.location.path!=='/Apropos'  ?  <Header/>:null
   */}
    <Switch>
          <Route path="/" exact component={Accueil} /> 
          <Route path="/Accueil" component={Accueil} /> 
          <Route path="/Apropos" exact component={Apropos} /> 
          <Route path="/Offre" component={OffreStage} /> 
          <Route path="/Stages" component={Stages} /> 
          <Route path="/Stagier" component={Stagier} /> 
          <Route path="/DetailsStage" component={DetailsStage} /> 
          <Route path="/DetailsStagiers" component={DetailsStagiers} /> 
          <Route path="/Contact" component={Contact} /> 
          <Route path="/Admin"  component={Admin} /> 
           {/*  <Route path="/Footer" component={Footer} />  */}
    </Switch>
    </>
  );
}

export default App;
