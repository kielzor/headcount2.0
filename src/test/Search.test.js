import React from 'react'
import Search from '../Search.js'
import { shallow, mount } from 'enzyme'

describe('Search', () => {
  let updateCardsMock;
  let wrapper;

  beforeEach(() => {
    updateCardsMock = jest.fn()
    wrapper = shallow(<Search updateCards={updateCardsMock} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('invokes updateCards when input is changed', () => {
    const mockEvent =  {target: {value: 'Col'}}

    wrapper.find('.search-input').simulate('change', mockEvent)

    expect(updateCardsMock).toHaveBeenCalled()
  })

  it('returns the correct value from the input field', () => {
    const mockEvent = {target: {value: 'COL'}}

    wrapper.find('.search-input').simulate('change', mockEvent)

    expect(mockEvent.target.value).toBe('COL')
  })
})