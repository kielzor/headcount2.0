import React, {Component} from 'react'


const Card = ({data, addCompareCards}) => {
  const stats = Object.entries(data.stats).map(key => {
    if (key[1] > .5) {
      return  <div className='higher'>
                <p className='year'>{key[0]}</p>
                <p className='val'>{key[1]}</p>
              </div>
    } else {
      return  <div className='lower'>
                <p className='year'>{key[0]}</p>
                <p className='val'>{key[1]}</p>
                <p className='hide'>----</p>
              </div>
    }
  })

  return (
    <span className='card' onClick={(e) => addCompareCards(e.target.closest('span'))}>
      <h5 className='location'>{data.location}</h5>
      <div className='stats'>{stats}</div>
    </span>
  )
}

export default Card