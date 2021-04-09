
import React from 'react';
import ReactDOM from 'react-dom';
import OffreStage from '../components/OffreStage'
import { render } from '@testing-library/react';




describe('Siber Data test de data const', () => {
    it('Siber Data test du composant', () => {
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