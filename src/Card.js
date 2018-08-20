import React from 'react';
import PropTypes from 'prop-types';


const Card = ({data, evaluateCompareCard, comparedInClass, compArrFull}) => {
  const stats = Object.entries(data.stats).map((entry, i) => {
    if (entry[1] > .5) {
      return  <div className='higher' key={`${data.location}${i}`}>
        <p className='year'>{entry[0]}</p>
        <p className='val'>{entry[1]}</p>
      </div>;
    } else {
      return  <div className='lower' key={`${data.location}${i}`}>
        <p className='year'>{entry[0]}</p>
        <p className='val'>{entry[1]}</p>
        <p className='hide'>----</p>
      </div>;
    }
  });

  const evaluateClass = () => {
    let futureClass = 'card';

    if (!compArrFull) futureClass += ' card-hover';
    if (comparedInClass) futureClass += ' selected card-hover';
    if (compArrFull && !comparedInClass) futureClass += ' no-click';

    return futureClass;
  };

  return (
    <span className={ evaluateClass() }
      onClick={() => { evaluateCompareCard(data.location) }}>
      <h5 className='location'>{data.location}</h5>
      <div className='stats'>{stats}</div>
    </span>
  );
};

Card.propTypes = {
  data: PropTypes.object,
  evaluateComparedCard: PropTypes.func,
  comparedInClass: PropTypes.bool,
  compArrFull: PropTypes.bool
};

export default Card;