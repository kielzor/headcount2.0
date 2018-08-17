import React from 'react'
import Card from './Card'

const CompareContainer = ({data, evaluateCompareCard}) => {
  const displayCards = data.map((cardData) =>
  <Card 
    data={cardData}
    evaluateCompareCard={evaluateCompareCard}
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