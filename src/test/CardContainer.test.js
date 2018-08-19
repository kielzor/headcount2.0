import React from 'react'
import { shallow, mount } from 'enzyme'
import CardContainer from '../CardContainer'

describe('CardContainer', () => {
  let wrapper
  let mockData
  let mockCompare

  beforeEach(() => {
    mockData = []
    const mockUpdate = jest.fn()
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

  // it('returns false if the card locations do not match', () => {
  //   mockData = [{location: 'COLORADO'}]
  //   mockCompare = [{target: {location: 'ACADEMY 20'}}]


  //   // wrapper = mount(<CardContainer 
  //   //                   data={mockData}
  //   //                   comparedArr={mockCompare}/>)


  //   console.log(wrapper.instance())
  //   const instance = wrapper.instance()

  //   instance.updateClass()


  //   expect(mockUpdate).toHaveBeenCalled()
  // })
})