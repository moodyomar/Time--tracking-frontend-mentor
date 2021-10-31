import React, { useEffect, useState } from 'react';
import Card from '../comps/Card';
import data from '../assests/data.json'
import '../style/Dashboard.css'
import '../style/Card.css'
import ProfileCard from '../comps/ProfileCard';
import BottomBar from '../comps/BottomBar';
import AddActivity from '../comps/AddActivity';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const Dashboard = () => { 

  let [category,setCategory] = useState('daily');
  let {activity:{activityForm},auth:{isAuthenticated}} = useSelector(state => state)
  

  useEffect(() => {

},[category])

const cards = data.map((ca,i) => (
  <Card key={i} ca={ca} category={category} />
))

if(!isAuthenticated) return <Redirect to="/login"/>


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