import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import { Route } from 'react-router-dom'
import AuthorDetail from './author-detail.js'


describe('AuthorDetail Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<AuthorDetail match= {{params:{name:"test"}}}/>)
    })
    it('Should contain class name name', () => {
      wrapper.setState({ books: []})
      expect(wrapper.find('div').at(1).hasClass('name')).toEqual(true)
    })
  })
