import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'

const CompareContainer = ({compared, evaluateCompareCard, district}) => {
  const displayCards = compared.map((cardData, i) =>
  <Card 
    data={cardData}
    evaluateCompareCard={evaluateCompareCard}
    key={`${cardData} + ${i}`}
  />
)

  const createAverage = () => {
    let average = district.compareDistrictAverages(compared[0].location, compared[1].location)
    return Object.values(average)
  }

  return (
    <div className='compare-box'>
      <div className='empty-compare'>{displayCards[0]}</div>
      <div className='compare-text'>
        <h4 className='compare-header'>Compare Locations</h4>
        {compared.length === 2 && <h4 className='compare-num'>Averages</h4>}
        {compared.length === 2 && <h4 className='main-average'>{createAverage()[2]}</h4>}
        <div className='single-avgs'>
          {compared.length === 2 && <h4>{createAverage()[0]}</h4>}
          {compared.length === 2 && <h4>{createAverage()[1]}</h4>}
        </div>
      </div>
      <div className='empty-compare'>{displayCards[1]}</div>
    </div>
  )
}

CompareContainer.propTypes = {
  compared: PropTypes.array,
  evaluateCompareCard: PropTypes.func,
  district: PropTypes.object
}

export default CompareContainer