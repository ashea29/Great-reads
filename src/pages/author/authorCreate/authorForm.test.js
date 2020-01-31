import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import { Route } from 'react-router-dom'
import AuthorForm from './authorForm.js'


describe('AuthorForm Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<AuthorForm />)
    })
    it('Should contain class name overlay', () => {
     expect(wrapper.find('div').at(1).hasClass('overlay')).toEqual(true)
    })
  })