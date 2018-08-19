import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'

const CardContainer = ({data, addCompareCards, evaluateCompareCard, comparedArr}) => {
  const updateClass = (cardData) => {
    if ((comparedArr[0] && cardData.location === comparedArr[0]['location']) ||
        (comparedArr[1] && cardData.location === comparedArr[1]['location'])) {
      return true
    }
    return false
  }

  const displayCards = data.map((cardData, i) =>
    <Card 
      evaluateCompareCard={evaluateCompareCard}
      data={cardData}
      addCompareCards={addCompareCards}
      key={`${cardData.location} + ${i}`}
      comparedInClass={updateClass(cardData)}
      compArrFull={comparedArr.length === 2 ? true : false}
    />
  )

  return (
    <div className='card-container'>
      {displayCards}
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.array,
  addCompareCards: PropTypes.func,
  evaluateCompareCard: PropTypes.func,
  comparedArr: PropTypes.array
}

export default CardContainer