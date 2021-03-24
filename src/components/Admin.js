import React from "react";
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css'
import './style/quotes.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style/admin.css'
import Navbar from './Navbar'
import Home from './pages/Home';
import Demande from './pages/Demande';
import Candidat from './pages/Candidat';
import Offre from './pages/OffreStage'
import './Navbar.css'

import fire from '../fire'

const handleLogOut = () => {
   fire.auth().signOut();
};


const Admin = () => {
   return(
      <>
         <Router>
           <Navbar handleLogOut={handleLogOut} />
        <Switch>
           <Route path='/' exact component={Home} />
          <Route path='/demande' component={Demande} />
          <Route path='/offre' component={Offre}/> 
          <Route path='/candidats' component={Candidat} />
        </Switch>
      </Router>
    </>
   );
};



export default Admin;