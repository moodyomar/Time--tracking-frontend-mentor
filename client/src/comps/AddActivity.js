import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import '../style/Activities.css'

const AddActivity = ({toggle}) => {

  let [activityName, setName] = useState('')
  let [activityCategory, setCategory] = useState('')
  let [activityTime, setTime] = useState('')

  const addActivity = () => {
let d = new Date();
let newActivity = {
  activityName,
  activityCategory,
  activityTime,
  date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
}
console.log(newActivity);
toggle(a => !a)

  }

  return (

    <div className="activitesWrappper">

      <div className="addActivity">
        <div className="close" onClick={() => toggle(a => !a)}><AiFillCloseCircle size={20}/></div>
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