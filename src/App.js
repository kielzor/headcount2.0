import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import kinderData from './data/kindergartners_in_full_day_program';
import Search from './Search'
import CompareContainer from './CompareContainer';
import DistrictRepository from './Helper'

const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super()
    this.comp = []
    this.state = {
      data: [],
      compared: [],
    }
  }

  componentDidMount = () => {
    this.updateCards()
  }

  updateCards = (string) => {
    let data = district.findAllMatches(string)
    
    this.setState({
      data
    })
  }

  evaluateCompareCard = (string) => {
    let data = district.findAllMatches(string) 
    
    if (this.comp[0] && data[0].location === this.comp[0]['location']) {
      this.comp.shift()
    } else if (this.comp[1] && data[0].location === this.comp[1]['location']) {
      this.comp.pop()
    } else{
      this.comp.push(data[0])
    }

    this.setState({
      compared: this.comp
    })
  }

  createAverage = () => {
    let average = district.compareDistrictAverages(this.state.compared[0].location, this.state.compared[1].location)
    return Object.values(average)
  }

  updateClass = (cardData) => {
    if ((this.state.compared[0] && cardData.location === this.state.compared[0]['location']) ||
        (this.state.compared[1] && cardData.location === this.state.compared[1]['location'])) {
      return true
    }
    return false
  }

  render() {
    return (
      <div>
        <header className='header'>
          <CompareContainer 
            district={district}
            compared={this.state.compared} 
            evaluateCompareCard={this.evaluateCompareCard}
            createAverage={this.createAverage}/>
          <Search updateCards={this.updateCards}
        />
        </header>
        <CardContainer
          updateClass={this.updateClass}
          evaluateCompareCard={this.evaluateCompareCard}
          comparedArr={this.state.compared}
          addCompareCards={this.addCompareCards}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
