import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import DistrictRepository from './Helper'
import kinderData from './data/kindergartners_in_full_day_program';
import Search from './Search'
import CompareContainer from './CompareContainer';

const district = new DistrictRepository(kinderData)
let counter = 0

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    this.updateCards()
  }

  updateCards = (string) => {
    let cardList = district.findAllMatches(string)

    this.setState({
      data: cardList
    })
  }

  addCompareCards = (card) => {
    if (counter === 2) return
    if (card.className.includes('selected')) return
  
      card.classList.add('selected')
      counter++
      console.log(counter)
  }

  render() {
    return (
      <div>
        <header className='header'>
          <CompareContainer />
          <Search updateCards={this.updateCards}/>
        </header>
        <CardContainer 
          addCompareCards={this.addCompareCards}
          data={this.state.data}/>
      </div>
    );
  }
}

export default App;
