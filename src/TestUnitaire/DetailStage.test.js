import React from 'react';
import ReactDOM from 'react-dom';
import DetailStage from '../components/DetailStage'
import { render } from '@testing-library/react';


it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<DetailStage/>,div)
})
