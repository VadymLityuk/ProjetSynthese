import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom'
import myimage from '../images/sign.png'

import Button from '@material-ui/core/Button';

export default class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    subject: "",
    sent: false,
    buttonText: "Envoyer le message",
    emailError: false,
  };
  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      subject: "",
      buttonText: "Message Sent",
    });

    setTimeout(() => {
      this.setState({ sent: false });
    }, 3000);
  };

  handleChangeEmail(e) {
    if (
      !e.target.value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      this.setState({
        email: e.target.value,
      });
      this.setState({ emailError: true });

      if (this.state.email === "") {
        this.setState({ emailError: false });
      }
    } else {
      this.setState({ email: e.target.value, emailError: false });
    }
  }

  formSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      subject: this.state.subject,
    };

    try {
      await axios.post("BACKEND_URL", data);
      this.setState({ sent: true }, this.resetForm());
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
        <div>
        <Grid item xs={12}>
        <div class="slider_secondary">
        <div class="single_slider  d-flex align-items-center slider_bg_1">
            <div class="container">
                <div  class="row align-items-center">
                    <div class="col-lg-7 col-md-6">
                        <div class="slider_text" >
                            <h4 style={{color:'white',fontSize: '44px'}}>
                            Contactés avec nous
                            </h4>
                           </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ilstration_img  d-none d-lg-block text-right" >
        <img src={myimage} alt="ava" /> 
        </div>
    </div>
      </Grid>
        <form  style={{padding: '22px',textAlign: 'center',paddingTop: '60px'}} className=" contact-form" onSubmit={(e) => this.formSubmit(e)}>
        <TextField 
          style={{ width: '60%'}}
          id="standard-multiline-flexible"
          label="Message"
          placeholder="Entrez un message"
          variant="outlined"
          multiline
          rowsMax={4}
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
          required
          type="text"
        />
        <br />
        <br />
        <br />

        <TextField
           style={{ width: '60%'}}
          id="outlined-basic"
          placeholder="Entrez votre nom"
          label="Nom"
          variant="outlined"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          required
          type="text"
        />
        <br />
        <br />
        <br />

        <TextField
           style={{ width: '60%'}}
          id="outlined-basic"
          label="Courriel"
          placeholder="Entrer l'adresse e-mail"
          variant="outlined"
          value={this.state.email}
          onChange={(e) => this.handleChangeEmail(e)}
          error={this.state.emailError}
          required
          type="email"
        />
        <br />
        <br />
        <br />
        <TextField
           style={{ width: '60%'}}
          id="outlined-basic"
          placeholder="Entrez le sujet"
          label="Sujet"
          variant="outlined"
          value={this.state.subject}
          onChange={(e) => this.setState({ subject: e.target.value })}
          required
        />
        <br />
        <br />
        <br />
        <div className="button--container">
          <Button type="submit" style={{backgroundColor: '#00D363',color: 'white' }} variant="contained">
            {this.state.buttonText}
          </Button>
        </div>
      </form>
      </div>
    );
  }
}