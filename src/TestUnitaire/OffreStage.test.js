
import React from 'react';
import ReactDOM from 'react-dom';
import OffreStage from '../components/OffreStage'
import { render } from '@testing-library/react';
//import "jest-dom/extend-expect"




describe('OffreStage.js', () => {
    it('path pour le page Offre de Stage', () => {
      const wrapper = shallowMount(OffreStage, {
        data() {
          return {
            handleLogOut: true,
          }
        }
      })
  
      expect(wrapper.find('.profile').exists()).toBeTruthy()
    })
  })