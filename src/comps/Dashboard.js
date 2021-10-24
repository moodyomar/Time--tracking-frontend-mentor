import React, { useEffect, useState } from 'react';
import { AiFillPlusCircle,AiFillClockCircle
  ,AiFillCheckCircle,AiFillUpCircle,AiFillQuestionCircle } from 'react-icons/ai';
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
  <div className="bottomBar mobileOnly">
<div className="wrapper">
<div className="icon" onClick={''} ><AiFillQuestionCircle size={45}/></div>
<div className="icon" onClick={''} ><AiFillClockCircle size={60}/></div>
<div className="icon" onClick={''} ><AiFillPlusCircle size={75}/></div>
<div className="icon" onClick={''} ><AiFillCheckCircle size={60}/></div>
<div className="icon" onClick={() => window.scrollTo(0,0)} ><AiFillUpCircle size={45}/></div>
</div>
  </div>
</div>

)
}

const shadow = {
  boxShadow:  '-1px -3px 10px 6px rgba(0,0,0,0.3)'

}

export default Dashboard