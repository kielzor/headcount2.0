import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App.js'
import ReactDOM from 'react-dom'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
 
  it('should render CompareContainer', () => {
    expect(wrapper.find('CompareContainer').length).toEqual(1)
  })

  it('should render Search', () => {
    expect(wrapper.find('Search').length).toEqual(1)
  })

  it('should render CardContainer', () => {
    expect(wrapper.find('CardContainer').length).toEqual(1)
  })

  it('should render all cards on initial render', () => {
    wrapper.instance().componentDidMount()

    expect(wrapper.state('data').length).toEqual(181)
  })

  it('updateCards should render cards with their information', () => {
    const mockCard = 'COLORADO'
    const expected = [{ "location": "COLORADO", 
                        "stats": 
                                {
                                  "2004": 0.24, 
                                  "2005": 0.278, 
                                  "2006": 0.337, 
                                  "2007": 0.395, 
                                  "2008": 0.536, 
                                  "2009": 0.598, 
                                  "2010": 0.64, 
                                  "2011": 0.672, 
                                  "2012": 0.695, 
                                  "2013": 0.703, 
                                  "2014": 0.741}}, 
                        {"location": "COLORADO SPRINGS 11", 
                          "stats": 
                                {
                                  "2004": 0.069, 
                                  "2005": 0.509, 
                                  "2006": 0.638, 
                                  "2007": 0.994, 
                                  "2008": 0.992, 
                                  "2009": 1, 
                                  "2010": 0.993, 
                                  "2011": 0.994, 
                                  "2012": 0.993, 
                                  "2013": 0.989, 
                                  "2014": 0.994}}]

    wrapper.instance().updateCards(mockCard)

    expect(wrapper.state('data')).toEqual(expected)
    expect(wrapper.state('data').length).toEqual(2)
  })
})