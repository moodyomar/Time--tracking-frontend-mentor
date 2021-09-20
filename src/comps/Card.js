import React from 'react';
import '../style/Card.css'

const Card = ({i,ca:{title,timeframes:{weekly,daily}}}) => { 

return(
<div className={`card${title}`} style={{display:'grid',placeItems:'center'}}>
<div className='backCard' style={{backgroundColor:`var(--${title.split(' ').join('')})`}}>
  <div className="svg"></div>
<div className="frontCard">
  <div className="d-flex">
    <div className="cardTitle">{title}</div>
    <div className="options">...</div>
  </div>
  <div className="col">
    <div className="hours">{weekly.current}hrs</div>
    <div className="date">Last Week - {weekly.previous}hrs</div>
  </div>
</div>
</div>
</div>

)
}

export default Card