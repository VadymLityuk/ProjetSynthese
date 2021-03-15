import React from "react";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import myimage from '../images/avatar.jpg'
import './style/main.css'
import './style/quotes.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import './style/slider.scss'


//import '../MainPage/page.css'

const avatar= {
  avatar: require("../images/ava2.JPG"),
};

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.success.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      
      identity: {
        margin: theme.spacing(6.1),
      },
  }));

  export default function Apropos() {
    const classes = useStyles();



    return (
    <>
        
        <div class="slider_secondary">
        <div class="single_slider  d-flex align-items-center slider_bg_1">
            <div class="container">
                <div  class="row align-items-center">
                    <div class="col-lg-7 col-md-6">
                        <div class="slider_text" >
                            <h3 >Accéder à votre compte</h3>
                            <p data-wow-duration="1s" data-wow-delay=".4s">L'unique répertoire de stages et de stagiaires au Québec</p>
                           </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ilstration_img  d-none d-lg-block text-right" >
        <img src={myimage} alt="ava" />
        </div>
    </div>
    <div style={{paddingBottom: '40px'}}>
    <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
        <Container  xs={6} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar  className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Identification
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ backgroundColor:'#3c82df',color: 'white'}}s
            className={classes.submit}
          >
           S'identifier
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
        </Grid>
<Grid item  lg={6} xs={12}>
    <div className={classes.paper}>
            <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Nouvel utilisateur
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="address-line1"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        
      </Grid>
      <Button 
            spacing={3}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ backgroundColor:'#3c82df',color: 'white'}}
            className={classes.identity}
          >
              S'inscrire
          </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
        <div class="section-top-border">
				<div class="row">
					<div class="col-md-3">
						<img  src={myimage} alt="" class="img-fluid"/>
					</div>
					<div class="col-md-9 mt-sm-20 info">
						<p style={{fontWeight:'500', color: 'rgb(168, 168, 177)'}}>Recently, the US Federal government banned online casinos from operating in America by making
							it illegal to
							transfer money to them through any US bank or payment system. As a result of this law, most
							of the popular
							online casino networks such as Party Gaming and PlayTech left the United States. Overnight,
							online casino
							players found themselves being chased by the Federal government. But, after a fortnight, the
							online casino
							industry came up with a solution and new online casinos started taking root. These began to
							operate under a
							different business umbrella, and by doing that, rendered the transfer of money to and from
							them legal. A major
							part of this was enlisting electronic banking systems that would accept this new
							clarification and start doing
							business with me. Listed in this article are the electronic banking systems that accept
							players from the United
							States that wish to play in online casinos.</p>
                            <div class="slider_text">
                                <hr/>
                            <h6>Copyright © Vadim Lityuk 2021.</h6>
                        </div>
					</div>

                    
				</div>
                </div>
                </Grid>
      </Grid>
      
    </div>
    
    
    </>
    );
  }

 

