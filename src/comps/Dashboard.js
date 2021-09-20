import React from 'react';
import Card from './Card';
import card from '../assests/data.json'
import '../style/Dashboard.css'
import '../style/Card.css'
import ProfileCard from './ProfileCard';

const Dashboard = () => { 

const cards = card.map((ca,i) => (
  <Card key={i} ca={ca}  />
))

return(

<div className='dashboard'>
<div className="profileSection">
<ProfileCard />
</div>
  {cards}
</div>

)
}

export default Dashboard