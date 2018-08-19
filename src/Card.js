import React from 'react'


const Card = ({data, evaluateCompareCard, comparedInClass, compArrFull}) => {
  const stats = Object.entries(data.stats).map(entry => {
    if (entry[1] > .5) {
      return  <div className='higher'>
                <p className='year'>{entry[0]}</p>
                <p className='val'>{entry[1]}</p>
              </div>
    } else {
      return  <div className='lower'>
                <p className='year'>{entry[0]}</p>
                <p className='val'>{entry[1]}</p>
                <p className='hide'>----</p>
              </div>
    }
  })

  const evaluateClass = () => {
    let futureClass = 'card'

    if(!compArrFull) futureClass += ' card-hover'
    if(comparedInClass) futureClass += ' selected card-hover'
    if (compArrFull && !comparedInClass) futureClass += ' no-click'

    return futureClass
  }

  return (
    <span className={evaluateClass()} 
          onClick={(e) => evaluateCompareCard(e.target.closest('span'))}>
      <h5 className='location'>{data.location}</h5>
      <div className='stats'>{stats}</div>
    </span>
  )
}

export default Card