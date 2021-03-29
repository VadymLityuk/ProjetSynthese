
import React from 'react';
import ReactDOM from 'react-dom';
import Apropos from '../components/Apropos'
import { render } from '@testing-library/react';
//import "jest-dom/extend-expect"




describe('Apropos.js', () => {
    it('Le composant affiche le Dashboard d\'admin si l/\'utilisateur est connecté.', () => {
      const wrapper = shallowMount(Apropos, {
        data() {
          return {
            handleLogOut: true,
          }
        }
      })
  
      expect(wrapper.find('.profile').exists()).toBeTruthy()
    })
  })