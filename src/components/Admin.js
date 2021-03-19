import React from "react";
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css'
import './style/quotes.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style/admin.css'
import Navbar from './Navbar'
import Home from './pages/Home';
import Reports from './pages/Report';
import Candidat from './pages/Candidat';
import './Navbar.css'
const Admin = ({handleLogOut}) => {
   return(
      <>
         <Router>
           <Navbar  />
           <div  style={{float:'right',padding: '4px 0px 5px 5px'}}>
      <Button variant="contained" color="secondary" onClick={handleLogOut}>
              Log Out
     </Button>
     </div>
        <Switch>
           <Route path='/' exact component={Home} />
          <Route path='/Reports' component={Reports} />
          <Route path='/products' component={Candidat} />
        </Switch>
      </Router>
    </>
   );
};



export default Admin;