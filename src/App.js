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

  render() {
    return (
      <div>
        <header className='header'>
          <CompareContainer />
          <Search updateCards={this.updateCards}/>
        </header>
        <CardContainer data={this.state.data}/>
      </div>
    );
  }
}

export default App;
