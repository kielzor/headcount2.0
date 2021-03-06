import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render () {
    return (
      <div className='input-box'>
        <h1 className='header-text'>Headcount 2.0</h1>
        <input 
          className='search-input' 
          type='text' 
          placeholder='Filter districts' 
          onChange={(event) => this.props.updateCards(event.target.value)}
        />
      </div>
    );
  }
}

Search.propTypes = {
  updateCards: PropTypes.func
};

export default Search;