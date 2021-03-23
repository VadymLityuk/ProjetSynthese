
import React, { Component } from 'react';
import Container from "react-bootstrap/Container"; 
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
import TextField from '@material-ui/core/TextField';
import '../style/main.css'
import '../style/quotes.css'
import '../style/offre.scss'
import '../style/slider.scss'

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
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
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      height: 440,
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
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
          {"name":"Sonica",
           "jobtitle":"Front-End Developpeur",
           "time":"Temps plein",
           "address":"Trois-Rivières",
           "date":"16 Mars 2021",
           "img":"https://thenetmencorp.com/wp-content/uploads/2017/08/LO_2016-03-450x450.jpg"
           },
         {"name":"QC AYANS",
            "jobtitle":"Opérateur Presse",
            "time":"Temps partiel",
            "address":"Quebec",
            "date":"1 avril 2021",
            "img":"https://thenetmencorp.com/wp-content/uploads/2020/01/LO_2018-01_SERVICES_INTERNET_IT_RETAIL_INITIAL-450x449.jpg"
           },
           {"name":"Pixel Anim",
           "jobtitle":"Opérateur Presse",
           "time":"Temps partiel",
           "address":"Kyiv",
           "date":"1 avril 2021",
           "img":"https://thenetmencorp.com/wp-content/uploads/2020/01/LO_2018-01_SERVICES_INTERNET_IT_RETAIL_INITIAL-450x449.jpg"
          },
        ],
      }
     };

     componentDidMount(){
      this.refs.name.focus();
    }

    Soumettre = (e) =>{
      e.preventDefault();
      console.log('try');

      let datas = this.state.datas;
      let name = this.refs.name.value;
      let address = this.refs.address.value;
      let jobtitle = this.refs.jobtitle.value;
  
      if(this.state.act === 0){   //new
        let data = {
          name, address,jobtitle
        }
        datas.push(data);
      }else{                      //update
        let index = this.state.index;
        datas[index].name = name;
        datas[index].address = address;
        datas[index].jobtitle = jobtitle;
      }    
      //toast.success("Soumettre avec success!!! " + name);
      this.setState({
        datas: datas,
        act: 0
      });
      toast.success("Soumettre avec success!!! " + name);
      this.refs.myForm.reset();
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
      //toast.info("Ajout avec success!!! ");
      let data = this.state.datas[i];
      this.refs.name.value = data.name;
      this.refs.address.value = data.address;
      this.refs.jobtitle.value = data.jobtitle;
  
      this.setState({
        act: 1,
        index: i
      });
  
      this.refs.name.focus();
    }  



  render(){
    let datas = this.state.datas;
    const { classes } = this.props;
    
   
 const notify = () => toast("Wow so easy!");
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
   return(
      <>
<main className={classes.content}>
        
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <navbar>    <div className="menubars">
          <Link to='#' className='menu-bars' >
          <Button style={{color:'#1a83ff',fontSize: '18px'}}>
            <AiIcons.AiOutlinePlus />
           <a> Ajouter une offre</a> 
           </Button>
          </Link>
          <Link to='#' className='menu-bars' >
            <Button style={{color:'#1a83ff',fontSize: '18px'}}>
            <AiIcons.AiOutlinePlus  />
           <a> Ajouter une demande de stage</a> 
           </Button>
          </Link>
          </div></navbar>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
            <div className="App">
        <h2>test crud crud</h2>
        <div class="single_field">
        <form ref="myForm" className="myForm">
         <input type="text" ref="name" placeholder="name" className="formField"/>
          <input type="text" ref="address" placeholder="address" className="formField" />
          <input type="text" ref="jobtitle" placeholder="jobtitle" className="formField" />
          <button onClick={(e)=>this.Soumettre(e)} className="myButton">submit </button>
        </form>
        </div>
        <pre>
        <ToastContainer />
       
          {datas.map((data, i) =><Grid  xs={6} md={6} lg={4} style={{display:'inline-block',padding: '10px'}}>
            <div class="single_jobs white-bg d-flex justify-content-between" style={{backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <div class="jobs_left d-flex align-items-center">
                <div class="thumb" style={{paddingRight: '6px',marginBottom: '6px'}}>
                    <img style={{maxWidth:'150px',maxHeight: '100px'}}  alt=""/> 
                </div>
                <div   className="myList" class="jobs_conetent">
                    <a ><h5 style={{color: 'rgb(0, 211, 99)'}}> {i+1}. {data.name}</h5></a>
                    <a ><h6 >{data.jobtitle}</h6></a>
                    <div class="links_locat d-flex align-items-center">
                        <div class="location">
                            <p style={{color: 'gray',padding:'2px'}}>
                            <LocationOnIcon  style={{color: 'lightgray',padding:'2px'}}/>
                            {data.address}</p>
                        </div>
                        <div class="location" style={{color: 'gray',padding:'2px'}}>
                            <p><AccessTimeIcon style={{color: 'lightgray',padding:'2px'}}/> 
                            {data.name}</p>
                        </div>
                    </div>
                    
              <button onClick={()=>this.Suppression(i)} className="myListButton">remove </button>
              <button onClick={()=>this.Ajout(i)} className="myListButton">edit </button>
                </div>
            </div>
            </div>
            </Grid>)}
        </pre>
      </div>
        {/**<li key={i} className="myList">
              {i+1}. {data.name}, {data.address}, {data.jobtitle}
              <button onClick={()=>this.Suppression(i)} className="myListButton">remove </button>
              <button onClick={()=>this.Ajout(i)} className="myListButton">edit </button>
            </li> */} 
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
          </Box>
        </Container>
      </main>
    </>
   );
  }
};



export default withStyles(styles) (Home);

