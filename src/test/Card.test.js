import React from 'react'
import { shallow, mount } from 'enzyme'
import Card from '../Card'

describe('card', () => {
  let wrapper
  let evaluateCompareMock
  let mockData

  beforeEach(() => {
    mockData = {location: 'COLORADO', stats: {}}
    evaluateCompareMock = jest.fn()
    wrapper = shallow(<Card 
                    evaluateCompareCard={evaluateCompareMock} 
                    data={mockData}/>)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  // it('adds the correct class when evaluateClass is invoked', () => {
  //   wrapper = shallow(<Card 
  //     evaluateCompareCard={evaluateCompareMock} 
  //     data={mockData}
  //     comparedInClass={true}/>)

  //     wrapper.instance().evaluateClass()

  //     expect(wrapper.futureClass).toEqual('card')
  // })

  // it('invokes evaluateCompareCard', () => {
  //   wrapper = mount(<Card 
  //     evaluateCompareCard={evaluateCompareMock} 
  //     data={mockData}/>)

  //   wrapper.find('span').simulate('click')

  //   expect(evaluateCompareMock).toHaveBeenCalled()
  // })
})