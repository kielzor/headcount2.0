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

  addCompareCards = (card) => {
    let data = district.findAllMatches(card.children[0].innerText)
    if(this.comp.length < 2) {
      if(this.comp.length === 1 && data[0].location === this.comp[0]['location']){
        return
      }
      this.comp.push(data[0])
      this.setState({
        compared: this.comp
      })
    }
    else {
      if(data[0].location === this.comp[0]['location']) {
        this.comp.shift()
      }
      else if (data[0].location === this.comp[1]['location']) {
        this.comp.pop()
      }
      this.setState({
        compared: this.comp
      })
    }
  }

  evaluateCard = (card) => {
    // if (this.state.compared.length >= 2) {
    //   return
    // }
    console.log('compare', this.state.compared)
    console.log('data', this.state.data)
    if (card.className.includes('selected')) return
    card.classList.add('selected')
  }

  check() {
    return this.state.compared
  }

  render() {
    console.log('compare render', this.state.compared)
    return (
      <div>
        <header className='header'>
          <CompareContainer data={this.state.compared} check={this.check()}/>
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
