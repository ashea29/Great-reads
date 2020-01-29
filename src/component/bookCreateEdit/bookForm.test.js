import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import { Route } from 'react-router-dom'
import BookForm from "./bookForm.js"
import Header from "./component/header/header"

describe("Bookform component:", () => {
  let component
  beforeEach(() => {
    component = shallow(<BookForm />)
  })
  it('dsd', () => {
    const component = shallow(<BookForm bookAction="create" />)
  })
})