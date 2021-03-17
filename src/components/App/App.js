import React from 'react';
import '../App/App.scss';
import {Accueil} from '../Accueil'
import  {Container} from 'react-bootstrap';
import Header from '../Header'
import Apropos from '../Apropos'
import OffreStage from '../OffreStage'
import Stages from '../Stages'
import Stagier from '../Stagers'
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, Route, Switch } from "react-router-dom";
import DetailsStage from '../DetailsStage'
import DetailsStagiers from '../DetailsStagiers'
import Contact from '../Contact'


function App() {
  return (
 <>
   <>
    <Header/>
    <Switch>
          <Route path="/" exact component={Accueil} /> 
          <Route path="/Accueil" component={Accueil} /> 
          <Route path="/Apropos" component={Apropos} /> 
          <Route path="/Offre" component={OffreStage} /> 
          <Route path="/Stages" component={Stages} /> 
          <Route path="/Stagier" component={Stagier} /> 
          <Route path="/DetailsStage" component={DetailsStage} /> 
          <Route path="/DetailsStagiers" component={DetailsStagiers} /> 
          <Route path="/Contact" component={Contact} /> 
           {/*  <Route path="/Footer" component={Footer} />  */}
    </Switch>
    <Footer/>
    </>
   </> 
  );
}

export default App;
