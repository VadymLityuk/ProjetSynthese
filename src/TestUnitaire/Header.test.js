import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header'
import { render } from '@testing-library/react';
//import "jest-dom/extend-expect"


it("renders sans crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Header/>,div)
})



