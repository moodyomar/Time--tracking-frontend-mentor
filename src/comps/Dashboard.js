import React, { useEffect, useState } from 'react';
import Card from './Card';
import data from '../assests/data.json'
import '../style/Dashboard.css'
import '../style/Card.css'
import ProfileCard from './ProfileCard';
import BottomBar from './BottomBar';
import AddActivity from './AddActivity';

const Dashboard = () => { 

  let [category,setCategory] = useState('daily');
  let [activityForm,toggleActivityForm] = useState(false);

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
{ activityForm &&
  <AddActivity toggle={toggleActivityForm} />
}
<BottomBar activity={activityForm} toggle={toggleActivityForm} />
</div>

)
}

export default Dashboard