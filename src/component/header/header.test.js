import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import { Route } from 'react-router-dom'
import Header from './header.js'


describe('Header Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Header />)
    })
    it('Should contain class name header', () => {
     expect(wrapper.find('div').at(0).hasClass('header')).toEqual(true)
    })
  })