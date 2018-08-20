import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CompareContainer = ({createAverage, compared, evaluateCompareCard}) => {
  const displayCards = compared.map((cardData, i) =>
    <Card 
      data={cardData}
      evaluateCompareCard={evaluateCompareCard}
      key={`${cardData} + ${i}`}
    />
  );

  return (
    <div className='compare-box'>
      <div className='empty-compare'>{displayCards[0]}</div>
      <div className='compare-text'>
        {compared.length === 2 && <h4 className='compare-header'>Compared Locations</h4>}
        {compared.length === 2 && <h4 className='compare-num'>Averages</h4>}
        {compared.length === 2 && <h4 className='main-average'>{createAverage()[2]}</h4>}
        {compared.length === 1 && <h4 className='compare-header'>Choose another location</h4>}
        <div className='single-avgs'>
          {compared.length === 2 && <h4>{createAverage()[0]}</h4>}
          {compared.length === 2 && <h4>{createAverage()[1]}</h4>}
        </div>
      </div>
      <div className='empty-compare'>{displayCards[1]}</div>
    </div>
  );
};

CompareContainer.propTypes = {
  compared: PropTypes.array,
  evaluateCompareCard: PropTypes.func,
  district: PropTypes.object
};

export default CompareContainer;