import React from 'react';
import '../App/App.scss';
import {Accueil} from '../Accueil'
import  {Container} from 'react-bootstrap';
import Header from '../Header'

import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, Route, Switch } from "react-router-dom";



function App() {
  return (
 <>
   <>
    <Header/>
    <Switch>
      
          <Route path="/" exact component={Accueil} /> 
          <Route path="/Accueil" component={Accueil} /> 
           {/*  <Route path="/Footer" component={Footer} />  */}
         
        
        
    </Switch>
    <Footer/>
    </>
   </> 
  );
}

export default App;
