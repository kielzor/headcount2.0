import React from 'react'
import Card from './Card'

const CardContainer = ({data, addCompareCards}) => {
  const displayCards = data.map((cardData) =>
    <Card 
      data={cardData}
      addCompareCards={addCompareCards}
      key={cardData.location}
    />
  )

  return (
    <div className='card-container'>
      {displayCards}
    </div>
  )
}

export default CardContainer