import React, { useEffect, useState } from 'react';
import Card from '../comps/Card';
import data from '../assests/data.json'
import '../style/Dashboard.css'
import '../style/Card.css'
import ProfileCard from '../comps/ProfileCard';
import BottomBar from '../comps/BottomBar';
import AddActivity from '../comps/AddActivity';
import { useSelector } from 'react-redux';

const Dashboard = () => { 

  let [category,setCategory] = useState('daily');
  let {activityForm} = useSelector(state => state.activity)
  

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
  <AddActivity />
}
<BottomBar />
</div>

)
}

export default Dashboard