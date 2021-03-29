
import React, { Component,useState } from 'react';
import Container from "react-bootstrap/Container"; 
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import * as AiIcons from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/main.css'
import '../style/quotes.css'
import '../style/offre.scss'
import '../style/slider.scss'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import SchoolIcon from '@material-ui/icons/School';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';

  const drawerWidth = 540;
  
  const styles  = theme => ({
    root: {
      display: 'flex',
    },
   
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      width: '100%',
    },
    container: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(2),
    },
    
  });
  
  

export class Home extends Component {

     constructor(props){
      super(props);
      this.refs= React.createRef();
      this.state={
        act: 0, 
        index : '',
        datas: [
          {"name":"WEB TR",
           "jobtitle":"Front-End Developpeur",
           "time":"Temps plein",
           "address":"Trois-Rivières",
           "date":"19 Mars 2021",
           },
         {"name":"QC AYANS",
            "jobtitle":"Opérateur Presse",
            "time":"Temps partiel",
            "address":"Quebec",
            "date":"6 avril 2021",
           },
           {"name":"Pixel Anim",
           "jobtitle":"Animateur 3D",
           "time":"Temps partiel",
           "address":"Shawinigan",
           "date":"6 Mars 2021",
          },
          
        ],
        dataStu: [
          {"name":"Liane Legrand",
           "jobtitle":"Animateur 3D",
           "time":"Temps plein",
           "address":"Quebec",
           "date":"16 Mars 2021",
           "school":"Cegep de Trois-Rivières",
           },
         {"name":"Anne Legault",
            "jobtitle":"Full-Stack Developpeur",
            "time":"Temps partiel",
            "address":"Quebec",
            "date":"1 avril 2021",
           "school":"Université Laval",
           },
           {"name":"Andrée Lavigne",
           "jobtitle":"Opérateur Presse",
           "time":"Temps partiel",
           "address":"Montreal",
           "date":"1 avril 2021",
           "school":"Cegep Shawinigan",
          },
          
        ],
        showForm: false,
        showStudent : false
      }
     };

     componentDidMount(){
      this.refs.name.focus();
    }
    SubmitStudent= (e) =>{
      e.preventDefault();
      console.log('try');

      let dataStu = this.state.dataStu
      let name = this.refs.name.value;
      let address = this.refs.address.value;
      let jobtitle = this.refs.jobtitle.value;
      let date = this.refs.date.value;
      let school = this.refs.school.value;
  
      if(this.state.act === 0){   //new
        
        let datast = {
          name, address,jobtitle,date,school
        }
        dataStu.push(datast);
      }else{                      //update
        let index = this.state.index;
        dataStu[index].name = name;
        dataStu[index].address = address;
        dataStu[index].jobtitle = jobtitle;
        dataStu[index].date = date;
        dataStu[index].school = school;
      }    
      //toast.success("Soumettre avec success!!! " + name);
      this.setState({
        dataStu : dataStu,
        act: 0
      });
      
      this.hideStudent();
      toast.success("Soumettre avec success!!! " + name);
      this.refs.myForm.reset();
      this.refs.name.focus();
    }

    Soumettre = (e) =>{
      e.preventDefault();
      console.log('try');

      let datas = this.state.datas;
      let name = this.refs.name.value;
      let address = this.refs.address.value;
      let jobtitle = this.refs.jobtitle.value;
      let date = this.refs.date.value;
  
      if(this.state.act === 0){   //new
        let data = {
          name, address,jobtitle,date
        }
        datas.push(data);
      }else{                      //update
        let index = this.state.index;
        datas[index].name = name;
        datas[index].address = address;
        datas[index].jobtitle = jobtitle;
        datas[index].date = date;
      }    
      //toast.success("Soumettre avec success!!! " + name);
      this.setState({
        datas: datas,
        act: 0
      });
      
      this.hide();
      toast.success("Soumettre avec success!!! " + name);
      this.refs.myForm.reset();
      this.refs.name.focus();
    }
    Delete = (i) => {
    
      let dataStu = this.state.dataStu;
      dataStu.splice(i,1);
      this.setState({
        dataStu: dataStu
      });
  
      this.refs.myForm.reset();
      this.refs.name.focus();
      toast.error("Suppression avec success");
    }
    Suppression = (i) => {
    
      let datas = this.state.datas;
      datas.splice(i,1);
      this.setState({
        datas: datas,
      });
  
      this.refs.myForm.reset();
      this.refs.name.focus();
      toast.error("Suppression avec success");
    }
    Decline = (i) => {
    
      let dataStu = this.state.dataStu;
      dataStu.splice(i,1);
      this.setState({
        dataStu: dataStu
      });

      toast.error("Demande rejetée");
    }
    Accept = (i) => {
    
      let dataStu = this.state.dataStu;
      dataStu.splice(i,1);
      this.setState({
        dataStu: dataStu
      });
  
      toast.success("Demande confirmée!!");
    }
    Refuser = (i) => {
    
      let datas = this.state.datas;
      datas.splice(i,1);
      this.setState({
        datas: datas,
      });
      toast.error("Offre rejetée");
    }
    Accepter = (i) => {
    
      let datas = this.state.datas;
      datas.splice(i,1);
      this.setState({
        datas: datas,
      });
      toast.success("Offre confirmée!!");
    }

    EditStudent = (i) => {
      
      //toast.info("Ajout avec success!!! ");
      
      let dataStu = this.state.dataStu[i];
      this.refs.name.value = dataStu.name;
      this.refs.address.value = dataStu.address;
      this.refs.jobtitle.value = dataStu.jobtitle;
      this.refs.date.value = dataStu.date;
      
      this.setState({
        act: 1,
        index: i,
      });
  
      this.refs.name.focus();
      this.hideStudent();
    }  
  
    Ajout = (i) => {
      
      //toast.info("Ajout avec success!!! ");
      
      let data = this.state.datas[i];
      this.refs.name.value = data.name;
      this.refs.address.value = data.address;
      this.refs.jobtitle.value = data.jobtitle;
      this.refs.date.value = data.date;
      
      this.setState({
        act: 1,
        index: i,
      });
  
      this.refs.name.focus();
      this.hide();
    }  

    Add =() => {

      this.hideStudent()
    }
    Ajj =() => {

      this.hide()
    }

  hide = ()=> {
  this.setState({
    showForm: !this.state.showForm
  })
  }
  hideStudent = ()=> {
    this.setState({
      showStudent: !this.state.showStudent
    })
    }

  render(){
    let datas = this.state.datas;
    let dataStu = this.state.dataStu;
    const { classes } = this.props;


   return(
      <>
<main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <navbar>    <div className="menubars">
          <Link to='#' className='menu-bars' >
          <Button style={{color:'#1a83ff',fontSize: '18px'}} onClick={()=>this.Ajj()}>
            <AiIcons.AiOutlinePlus />
            Ajouter une offre
           </Button>
          </Link>
          <Link to='#' className='menu-bars' >
            <Button style={{color:'#1a83ff',fontSize: '18px'}} onClick={()=>this.Add()}>
            <AiIcons.AiOutlinePlus  />
           Ajouter une demande de stage
           </Button>
          </Link>
          <hr/>
          </div></navbar>
            <div className="App">
       { this.state.showForm ? 
        <div class="single_field"> 
        <form ref="myForm" className="myForm">
       <input type="text" ref="name" placeholder="Nom" className="formField"/>
        <input type="text" ref="address" placeholder="Adresse" className="formField" />
        <input type="text" ref="jobtitle" placeholder="Profession" className="formField" />
        <input type="date" ref="date" placeholder="Date" className="formField" />
        <Button style={{paddingBottom: '8px',color:'#00D363'}}  onClick={(e)=>this.Soumettre(e)} className="myButton">Soumettre</Button>
      </form>  
       </div> :null}
       { this.state.showStudent ? 
        <div class="single_field"> 
        <form ref="myForm" className="myForm">
       <input type="text" ref="name" placeholder="Nom" className="formField"/>
        <input type="text" ref="address" placeholder="Adresse" className="formField" />
        <input type="text" ref="jobtitle" placeholder="Profession" className="formField" />
        <input type="date" ref="date" placeholder="Date" className="formField" />
        <input type="text" ref="school" placeholder="Éducation" className="formField" />
        <Button style={{paddingBottom: '8px',color:'#00D363'}}  onClick={(e)=>this.SubmitStudent(e)} className="myButton">Soumettre </Button>
      </form>  
       </div> :null}
         <ToastContainer />
         <div style={{padding: '8px'}}></div>
         <h3 style={{paddingBottom: '12px',color:'gray'}}><LibraryAddCheckIcon/> En attente de validation</h3>
         <Grid xs={12} container spacing={2}>
         <Grid item xs={6} >
         <div style={{padding: '4px'}}>
            <h4>Offres de stage <KeyboardArrowDownIcon/></h4>
        </div>
        {datas.map((data, i) =>
        <div class="single_jobs white-bg d-flex justify-content-between" style={{backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <div class="jobs_left d-flex align-items-center">
                <div   className="myList" class="jobs_conetent">
                    <a ><h5 ><PersonPinIcon /> {data.jobtitle}</h5></a>
                    <hr/>
                    <a ><h6 >Entreprise: {data.name}</h6></a>
                    <p style={{color:'#999999',fontWeight: 'bold'}} >Ville: {data.address}</p>
                    <div class="links_locat d-flex align-items-center">
                        <div class="location">
                            <p style={{color: 'gray',padding:'2px'}}>
                            <LocationOnIcon  style={{color: 'lightgray',padding:'2px'}}/>
                            {data.address}</p>
                        </div>
                        <div class="location" style={{color: 'gray',padding:'2px'}}>
                            <p><AccessTimeIcon style={{color: 'lightgray',padding:'2px'}}/> 
                            {data.date}</p>
                        </div>
                    </div>
                    <Link to={"/offre"}>
              <Button color="primary"className="myListButton">Details</Button>
              </Link>
              <Button color="secondary" onClick={()=>this.Refuser(i)} className="myListButton">Refuser </Button>
              <Button style={{color:'#00D363'}} onClick={()=>this.Accepter(i)} className="myListButton">Accepter </Button>
                </div>
            </div>
            </div>)}
        </Grid>
        <Grid item xs={6} >
        <div style={{padding: '4px'}}>
           <h4>Demandes de stage <KeyboardArrowDownIcon/></h4>
        </div>
        {dataStu.map((dataStu, i) =>
        <div class="single_jobs white-bg d-flex justify-content-between" style={{backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <div class="jobs_left d-flex align-items-center">
                <div   className="myList" class="jobs_conetent">
                    <a ><h5 ><SchoolIcon/> {dataStu.jobtitle}</h5></a>
                    <hr/>
                    <a ><h6 >{dataStu.name}</h6></a>
                   <p style={{color:'#999999',fontWeight: 'bold'}}> Établissement Scolaire : {dataStu.school}</p>
                    <div class="links_locat d-flex align-items-center">
                        <div class="location">
                            <p style={{color: 'gray',padding:'2px'}}>
                            <LocationOnIcon  style={{color: 'lightgray',padding:'2px'}}/>
                            {dataStu.address}</p>
                        </div>
                        <div class="location" style={{color: 'gray',padding:'2px'}}>
                            <p><AccessTimeIcon style={{color: 'lightgray',padding:'2px'}}/> 
                            {dataStu.date}</p>
                        </div>
                    </div>
                    <Link to={"/demande"}>
              <Button color="primary"className="myListButton">Details</Button>
              </Link>
              <Button color="secondary" onClick={()=>this.Decline(i)} className="myListButton">Refuser</Button>
              <Button style={{color:'#00D363'}} onClick={()=>this.Accept(i)} className="myListButton">Accepter </Button>
                </div>
            </div>
            </div>
        )}
        </Grid>
        </Grid>
      </div>
        {/**<li key={i} className="myList">
              {i+1}. {data.name}, {data.address}, {data.jobtitle}
              <button onClick={()=>this.Suppression(i)} className="myListButton">remove </button>
              <button onClick={()=>this.Ajout(i)} className="myListButton">edit </button>
            </li> */} 
            {/* Recent Deposits */}
        </Container>
        <form style={{visibility:'hidden'}} ref="myForm" className="myForm">
       <input type="text" ref="name" placeholder="name" className="formField"/>
        <input type="text" ref="address" placeholder="address" className="formField" />
        <input type="text" ref="jobtitle" placeholder="jobtitle" className="formField" />
        <input type="date" ref="date" placeholder="date" className="formField" />
        <Button  onClick={(e)=>this.Soumettre(e)} className="myButton">submit </Button>
      </form>
      </main>
    </>
   );
  }
};



export default withStyles(styles) (Home);

