import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import renderer from 'react-test-renderer'
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
  it('Should had a class name "none" when there is no bookAction prop', () => {
    wrapper.setProps({ bookAction: "" })
    expect(wrapper.hasClass('none')).toEqual(true)
  })
  it("book author input should be display as <p></p> when bookAction prop is 'edit'", () => {
    wrapper.setProps({ bookAction: "edit" })
    expect(wrapper.contains(<p></p>)).toBe(true)
  })
  it('had a class name overlay right after highest div', () => {
    wrapper.setProps({ bookAction: "edit" })
    expect(wrapper.find('div').at(1).hasClass('overlay')).toEqual(true)
  })
  it('had a class name bookpopup right after overlay', () => {
    wrapper.setProps({ bookAction: "edit" })
    expect(wrapper.find('div').at(2).hasClass('bookpopup')).toEqual(true)
  })
})