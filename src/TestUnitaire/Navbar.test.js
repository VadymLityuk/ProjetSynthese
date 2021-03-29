import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar'
import { render } from '@testing-library/react';
//import "jest-dom/extend-expect"



it("renders page correctement",()=>{
  const {getByTestid} = render(<Navbar handleLogOut="true"/>)
  expect(getByTestid('function')).toHaveTextContent("true")
})


it("renders sans crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Navbar/>,div)
})

