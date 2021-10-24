import React from 'react';
import '../style/Card.css'

const Card = ({i,ca:{title,timeframes},category}) => { 

let cat = title.split(' ').join('')
// console.log(cat.toLowerCase());

console.log(timeframes[category]);


return(
<div className={`card${title}`} style={{display:'grid',placeItems:'center'}}>
<div className={`backCard ${cat.toLowerCase()}-icon`} style={{backgroundColor:`var(--${cat})`}}>
<div className="frontCard">
  <div className="d-flex">
    <div className="cardTitle">{title}</div>
    <div className="options">...</div>
  </div>
  <div className="col">
    <div className="hours">{timeframes[category].current}hrs</div>
    <div className="date">Last Week - {timeframes[category].previous}hrs</div>
  </div>
</div>
</div>
</div>

)
}

export default Card