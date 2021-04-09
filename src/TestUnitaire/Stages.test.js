
import React from 'react';
import ReactDOM from 'react-dom';
import Stages from '../components/Stages'
import { render } from '@testing-library/react';
//import "jest-dom/extend-expect"




describe('Stages.js', () => {
    it('path pour le page de Stage, validation de composant', () => {
      const wrapper = shallowMount(Stages, {
        data() {
          return {
            handleLogOut: true,
          }
        }
      })
  
      expect(wrapper.find('.profile').exists()).toBeTruthy()
    })
  })