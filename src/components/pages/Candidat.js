import React, { Component } from 'react';
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

import SchoolIcon from '@material-ui/icons/School';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';

  const drawerWidth = 240;
  
  const styles  = theme => ({
    root: {
      display: 'flex',
    },
    avatar: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    toolbar: {
      paddingRight: 24, // garder le bon padding lorsque le drawer est fermé
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100%',
      overflow: 'hidden',
    },
    container: {
      width: '100%',
      overflow:'hidden',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  });

export class Candidat extends Component {

     constructor(props){
      super(props);
      this.refs= React.createRef();
      this.state={
        act: 0, 
        index : '',
        datas: [
          {"name":"Sonica",
           "jobtitle":"Front-End Developpeur",
           "time":"Temps plein",
           "address":"Trois-Rivières",
           "date":"16 Mars 2021",
           "school":"Cegep Sainte-Foy",
           "img":"https://scontent.fymy1-1.fna.fbcdn.net/v/t1.0-9/164833843_2824831727759082_1334690298931737482_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_ohc=-tJ779QwWisAX-BTUK5&_nc_ht=scontent.fymy1-1.fna&oh=d9cd93466bd5d3a503323389054eb133&oe=6082B76E"
           },
         {"name":"QC AYANS",
            "jobtitle":"Opérateur Presse",
            "time":"Temps partiel",
            "address":"Quebec",
            "date":"1 avril 2021",
           "school":"Cegep Quebec",
            "img":"https://scontent.fymy1-1.fna.fbcdn.net/v/t1.0-9/161579567_2819033345005587_4846364005569011113_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_ohc=YcfIkboHK-kAX8bTJp6&_nc_ht=scontent.fymy1-1.fna&oh=37202df3d10951f74f354b214338c345&oe=60825E60"
           },
           {"name":"Pixel Anim",
           "jobtitle":"Opérateur Presse",
           "time":"Temps partiel",
           "address":"Kyiv",
           "date":"1 avril 2021",
           "school":"Cegep Sainte-Foy",
           "img":"https://scontent.fymy1-1.fna.fbcdn.net/v/t1.0-9/160142646_2819033361672252_1761895350408269161_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_ohc=ofeRkravfLAAX93Yv7m&_nc_ht=scontent.fymy1-1.fna&oh=3e62d06cec45ab40d4aeb055c464c83d&oe=60823C65"
          },
        ],
        ShowForm: false,
      }
     };

     componentDidMount(){
      this.refs.name.focus();
    }

    hide = ()=> {
      this.setState({
        showForm: !this.state.showForm
      })
      }

    Soumettre = (e) =>{
      e.preventDefault();
      console.log('try');

      let datas = this.state.datas;
      let name = this.refs.name.value;
      let address = this.refs.address.value;
      let jobtitle = this.refs.jobtitle.value;
      let date = this.refs.date.value;
      let school = this.refs.school.value;
      let img = this.refs.img.value;
  
      if(this.state.act === 0){   //new
        let data = {
          name, address,jobtitle,date,school,img
        }
        datas.push(data);
      }else{                      //update
        let index = this.state.index;
        datas[index].name = name;
        datas[index].address = address;
        datas[index].jobtitle = jobtitle;
        datas[index].date = date;
        datas[index].school = school;
        datas[index].img = img;
      }    
      //toast.success("Soumettre avec success!!! " + name);
      this.setState({
        datas: datas,
        act: 0
      });
      toast.success("Soumettre avec success!!! " + name);
      
      this.hide()
      this.refs.name.focus();
    }
  
    Suppression = (i) => {
    
      let datas = this.state.datas;
      datas.splice(i,1);
      this.setState({
        datas: datas
      });
  
      this.refs.myForm.reset();
      this.refs.name.focus();
      toast.error("Suppression avec success");
    }
  
    Ajout = (i) => {

      
      let data = this.state.datas[i];
      this.refs.name.value = data.name;
      this.refs.address.value = data.address;
      this.refs.jobtitle.value = data.jobtitle;
  
      this.setState({
        act: 1,
        index: i
      });
      this.refs.name.focus();
      this.hide();
    }  



  render(){
    let datas = this.state.datas;
    const { classes } = this.props;
    
  
   return(
      <>
<main className={classes.content}>
        
        <div className={classes.appBarSpacer} />
        <Container  className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12}>
            <div className="App">
              <div style={{}}>
              { this.state.showForm ? <div class="single_field">
        <form ref="myForm" className="myForm">
         <input type="text" ref="name" placeholder="name" className="formField"/>
          <input type="text" ref="address" placeholder="address" className="formField" />
          <input type="text" ref="jobtitle" placeholder="jobtitle" className="formField" />
          <input type="date" ref="date" placeholder="date" className="formField" />
          <input type="text" ref="school" placeholder="school" className="formField" />
          <input type="text" ref="img" placeholder="img" className="formField" />
          <Button style={{color:'#00D363'}} onClick={(e)=>this.Soumettre(e)} className="myButton">submit </Button>
        </form>
        <hr/>
        </div>:null}
        </div>
        <ToastContainer />
          {datas.map((data, i) =><Grid  xs={12} style={{padding: '10px'}}>
            <div class="single_jobs white-bg d-flex justify-content-between" style={{backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <div class="jobs_left d-flex align-items-center">
                <div class="thumb" style={{paddingRight: '6px',marginBottom: '6px'}}>
                    <img src={data.img}  style={{maxWidth: '110px',maxHeight: '110px'}} alt=""/> 
                </div>
                <div   className="myList" class="jobs_conetent">
                    <a ><h5 style={{color: 'rgb(0, 211, 99)'}}>{data.name}</h5></a>
                    <a ><h6 >{data.jobtitle}</h6></a>
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
                        <div class="location" style={{color: 'gray',padding:'2px'}}>
                            <p><SchoolIcon style={{color: 'lightgray',padding:'2px'}}/> 
                            {data.school}</p>
                        </div>
                    </div>
              <Button color="secondary" onClick={()=>this.Suppression(i)} className="myListButton">Supprimer </Button>
              <Button style={{color:'#00D363'}} onClick={()=>this.Ajout(i)} className="myListButton">Modifier </Button>
                </div>
            </div>
            </div>
            </Grid>)}
      </div> </Grid>
          </Grid>
          <form ref="myForm" className="myForm" style={{visibility:'hidden'}}>
         <input type="text" ref="name" placeholder="name" className="formField"/>
          <input type="text" ref="address" placeholder="address" className="formField" />
          <input type="text" ref="jobtitle" placeholder="jobtitle" className="formField" />
          <button onClick={(e)=>this.Soumettre(e)} className="myButton">submit </button>
        </form>
        </Container>
      </main>
    </>
   );
  }
};



export default withStyles(styles) (Candidat);