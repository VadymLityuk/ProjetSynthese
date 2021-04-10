import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/Footer'
import { render } from '@testing-library/react';
//import "jest-dom/extend-expect"


it("render de Footer sans crash app ", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Footer/>,div)
})



