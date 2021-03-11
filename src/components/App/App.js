import React from 'react';
import '../App/App.scss';
import {Accueil} from '../Accueil'
import  {Container} from 'react-bootstrap';
import Header from '../Header'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div container fluid style={{width: '100%'}} > 

    
     <Header/>
     <Accueil/> 
     
     
    </div>
    
  );
}

export default App;
