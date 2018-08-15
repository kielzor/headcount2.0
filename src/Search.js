import React, { Component } from 'react'

class Search extends Component {
  render () {
    return (
      <input 
        className='search-input' 
        type='text' 
        placeholder='Search for district' 
        onChange={(e) => this.props.updateCards(e.target.value)}
      />
    )
  }
}

export default Search