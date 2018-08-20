import React from 'react'
import { shallow, mount } from 'enzyme'
import CompareContainer from '../CompareContainer'

describe('CompareContainer', () => {
  let wrapper
  let mockData
  let mockCompare

  beforeEach(() => {
    mockData = []
    const mockUpdate = jest.fn()
    wrapper = shallow(<CompareContainer 
                      compared={mockData}
                      comparedArr={mockCompare}/>)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should return information to the card', () => {
    expect(wrapper.find('div').length).toEqual(5)
    expect(wrapper.find('h4').length).toEqual(1)
  })
})