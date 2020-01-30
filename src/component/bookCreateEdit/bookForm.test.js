import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import { Route } from 'react-router-dom'
import BookForm from "./BookForm.js"

describe('BookForm Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BookForm />)
  })
  it('Should had a class name "block" when there is a bookAction prop', () => {
    wrapper.setProps({ bookAction: "create" })
    expect(wrapper.hasClass('block')).toEqual(true)
  })
  it('Should had a class name "none when there is no bookAction prop', () => {
    wrapper.setProps({ bookAction: "" })
    expect(wrapper.hasClass('none')).toEqual(true)
  })
})