import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import DistrictRepository from './Helper'
import kinderData from './data/kindergartners_in_full_day_program';
import Search from './Search'
import CompareContainer from './CompareContainer';

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

  evaluateCompareCard = (card) => {
    let data = district.findAllMatches(card.children[0].innerText) 
    
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

  // compareDistricts = (arr) => {
  //   console.log(arr)
  // }

  render() {
    return (
      <div>
        <header className='header'>
          <CompareContainer 
            data={this.state.compared} 
            evaluateCompareCard={this.evaluateCompareCard}/>
          <Search updateCards={this.updateCards}
        />
        </header>
        <CardContainer
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
