import React from 'react';
import ReactDOM from 'react-dom';
import Accueil from '../components/Accueil'
import { render } from '@testing-library/react';
//import "jest-dom/extend-expect"


it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Accueil/>,div)
})


/*
it("renders page correctement",()=>{
  const {getByTestid} = render(<Accueil handleLogOut="true"/>)
  expect(getByTestid('function')).toHaveTextContent("true")
})
*/