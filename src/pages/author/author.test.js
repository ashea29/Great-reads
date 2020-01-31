import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import { Route } from 'react-router-dom'
import Author from './author.js'


describe('Author Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Author />)
    })
    it('Should contain class name authorholder', () => {
     expect(wrapper.find('div').at(1).hasClass('authorholder')).toEqual(true)
    })
  })