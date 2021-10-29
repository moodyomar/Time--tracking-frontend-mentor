import React, { useState } from 'react';
import axios from 'axios';
import { AiFillCloseCircle } from 'react-icons/ai';

import '../style/Activities.css'
import { closeActivityForm } from '../actions/activity';
import { useDispatch } from 'react-redux';

const AddActivity = () => {

  let [activityName, setName] = useState('')
  let [activityCategory, setCategory] = useState('')
  let [activityTime, setTime] = useState('')
  let dispatch = useDispatch()

  const addActivity = () => {
let d = new Date();
let newActivity = {
  activityName,
  activityCategory,
  activityTime,
  date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
}
axios.post('/activity',newActivity)
.then(res => console.log(res))
.catch(err => console.log(err))

console.log(newActivity);
dispatch(closeActivityForm())
  }

  return (

    <div className="activitesWrappper">

      <div className="addActivity">
        <div className="close" onClick={() => dispatch(closeActivityForm())}><AiFillCloseCircle size={20}/></div>
        <p>Category : </p>
        <select name="category" id="catSelect"
          onChange={e =>
          setCategory(e.target.value)}>
          <option value="Work">Work</option>
          <option value="Play">Play</option>
          <option value="Study">Study</option>
          <option value="Exercise">Exercise</option>
          <option value="Social">Social</option>
          <option value="Self Care">Self Care</option>
        </select>
        <p>Activity : </p>
        <input type="text" placeholder="Night shift..."
          onChange={e =>
            setName(e.target.value)}/>
        <p>Time Spent : </p>
        <input type="time" id="appt" name="appt"
          min="09:00" max="18:00" required
          onChange={e =>
            setTime(e.target.value)}>
        </input>
        <button className="addBtn btn"
          onClick={addActivity }>Add</button>
      </div>
    </div>

  )
}

export default AddActivity