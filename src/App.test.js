import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import { Route } from 'react-router-dom'
import App from "./App.js"

describe("App component:", () => {
  let component
  beforeEach(() => {
    component = shallow(<App />)
  })
  it('has a App class', () => {
    expect(component.hasClass('App')).toEqual(true)
  })
  it("has more than 3 routes", () => {
    expect(component.find(Route).length).toBeGreaterThanOrEqual(4)
  })
})