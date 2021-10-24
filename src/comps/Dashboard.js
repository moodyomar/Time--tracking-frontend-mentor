import React, { useEffect, useState } from 'react';
import Card from './Card';
import data from '../assests/data.json'
import '../style/Dashboard.css'
import '../style/Card.css'
import ProfileCard from './ProfileCard';

const Dashboard = () => { 

  let [category,setCategory] = useState('daily')

  useEffect(() => {
console.log(category);

},[category])

const cards = data.map((ca,i) => (
  <Card key={i} ca={ca} category={category} />
))

return(

<div className='dashboard'>
<div className="profileSection">
<ProfileCard setCategory={setCategory} category={category} />
</div>
  {cards}
</div>

)
}

export default Dashboard