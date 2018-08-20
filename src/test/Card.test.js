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

  it('card does exist', () => {
    expect(wrapper.find('.card').length).toEqual(1)
  })

  it('adds the card-hover class when compArrFull is false', () => {
    wrapper = mount(<Card 
      compArrFull={false}
      evaluateCompareCard={evaluateCompareMock} 
      data={mockData}
      comparedInClass={false}/>)

      expect(wrapper.find('.card').hasClass('card-hover')).toEqual(true)
  })

  it('does not have the card-hover class when compArrFull is true and comparedInClass is false', () => {
    wrapper = mount(<Card 
      compArrFull={true}
      evaluateCompareCard={evaluateCompareMock} 
      data={mockData}
      comparedInClass={false}/>)

      expect(wrapper.find('.card').hasClass('card-hover')).toEqual(false)
  })
  
  it('does have the card-hover and selected class when comparedInClass is true', () => {
    wrapper = mount(<Card 
      compArrFull={true}
      evaluateCompareCard={evaluateCompareMock} 
      data={mockData}
      comparedInClass={true}/>)

      expect(wrapper.find('.card').hasClass('card-hover')).toEqual(true)
      expect(wrapper.find('.card').hasClass('selected')).toEqual(true)
  })
  
  it('does have the no-click class when comparedInClass is false and compArrFull is true', () => {
    wrapper = mount(<Card 
      compArrFull={true}
      evaluateCompareCard={evaluateCompareMock} 
      data={mockData}
      comparedInClass={false}/>)

      expect(wrapper.find('.card').hasClass('no-click')).toEqual(true)
  })

  it('invokes evaluateCompareCard when card is clicked', () => {
    expect(evaluateCompareMock).not.toHaveBeenCalled()

    wrapper.find('.card').simulate('click')

    expect(evaluateCompareMock).toHaveBeenCalled()
  })
})