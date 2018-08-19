import React, { Component } from 'react'

class Search extends Component {
  render () {
    return (
      <div className='input-box'>
        <h1 className='header-text'>Headcount 2.0</h1>
        <input 
          className='search-input' 
          type='text' 
          placeholder='Filter districts' 
          onChange={(e) => this.props.updateCards(e.target.value)}
        />
      </div>
    )
  }
}

export default Search