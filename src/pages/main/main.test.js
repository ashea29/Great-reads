import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import { Link } from 'react-router-dom'
import Main from "./main.js"
import books from "./maintest.json"

describe('Header Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Main books={books} />)
  })
  it('Has a class name book display', () => {
    expect(wrapper.find('div').at(0).hasClass('bookdisplay')).toEqual(true)
  })
  it('should have a length equal to the book props passed in', () => {
    expect(wrapper.find('.eachbookholder').length).toEqual(books.length)
  })
  it('should have 2 Links or more', () => {
    expect(wrapper.find(Link).length).toBeGreaterThanOrEqual(2)
  })
})