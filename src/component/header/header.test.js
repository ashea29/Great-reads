import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import { Link } from 'react-router-dom'
import Header from "./header.js"

describe('Header Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Header />)
  })
  it("had 3 or more Link", () => {
    expect(wrapper.find(Link).length).toBeGreaterThanOrEqual(3)
  })
  it('had a logo class as the 1st Link', () => {
    expect(wrapper.find(Link).at(0).hasClass('logolink')).toEqual(true)
  })
})