import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App.js'
import ReactDOM from 'react-dom'

const expectedColorado = [{ "location": "COLORADO", 
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
                "2014": 0.741
              }}]

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

  it('updateCards should render specific cards with the correct information', () => {
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
                                  "2014": 0.741
                                }}, 
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
                                  "2014": 0.994
                                }}]

    wrapper.instance().updateCards(mockCard)

    expect(wrapper.state('data')).toEqual(expected)
    expect(wrapper.state('data').length).toEqual(2)
  })

  it('evaluateCompareCard should add the correct card to the compared container', () => {
    wrapper.instance().evaluateCompareCard('COLORADO')

    expect(wrapper.state('compared').length).toEqual(1)
    expect(wrapper.state('compared')).toEqual(expectedColorado)
  })

  it('evaluateCompareCard should remove the correct card from the compared container', () => {

    wrapper.instance().evaluateCompareCard('COLORADO')
    wrapper.instance().evaluateCompareCard('ACADEMY 20')
    wrapper.instance().evaluateCompareCard('ACADEMY 20')

    expect(wrapper.state('compared')).toEqual(expectedColorado)
    expect(wrapper.state('compared').length).toEqual(1)
  })

  it('create average should return the correct averages', () => {
    wrapper.instance().evaluateCompareCard('COLORADO')
    wrapper.instance().evaluateCompareCard('ACADEMY 20')

    expect(wrapper.instance().createAverage()).toEqual([0.53, 0.407, 1.302])   
  })

  it('updateClass should return false initially, and true when it exists inside compare container', () => {
    expect(wrapper.instance().updateClass()).toEqual(false)

    wrapper.instance().evaluateCompareCard('COLORADO')
     
    expect(wrapper.instance().updateClass(expectedColorado[0])).toEqual(true)
  })
})