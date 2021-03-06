import React from 'react'
import { shallow, mount } from 'enzyme'
import CardContainer from '../CardContainer'

describe('CardContainer', () => {
  let wrapper
  let mockData
  let mockCompare

  beforeEach(() => {
    mockData = []
    wrapper = shallow(<CardContainer 
                      data={mockData}
                      comparedArr={mockCompare}/>)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should return information to the card', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
})