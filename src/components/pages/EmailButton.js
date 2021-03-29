

import React, { Component }  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';




class EmailButton extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        window.location.href = `mailto:${this.props.email}`;
    }
    render(){
        return <Button style={{color:'#00D363'}} onClick={this.onClick}>Envoyer</Button>;
    }
}

export default EmailButton;