import React from 'react'
import Card from './Card'

const CompareContainer = ({data, check}) => {
  console.log('data', data)
  console.log('check', check)
  const displayCards = data.map((cardData) =>
  <Card 
    data={cardData}
  />
)

  return (
    <div className='compare-box'>
      <div className='empty-compare'>{displayCards[0]}</div>
      <h4>Compare Locations</h4>
      <div className='empty-compare'>{displayCards[1]}</div>
    </div>
  )
}

export default CompareContainer