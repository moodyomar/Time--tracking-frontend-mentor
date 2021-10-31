import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


const ProfileCard = ({category,setCategory}) => { 

  
  const {isAuthenticated,user} = useSelector(state => state.auth)

return(

<div className="profileCardBack">
<div className="profileCardFront">
  <div className="flex-col">
    <div className="profilePicture"></div>
    <div className="rowOnMobile">
    <p className="reportsFor">Reports for</p>
    { user &&
    <h2 className="profileName">{user.name}</h2>
    }
    </div>
  </div>
</div>
<div className="timePeriod">
  <p className={category === 'daily' ? 'active' : ''}
   onClick={() => setCategory('daily')}>Daily</p>
  <p className={category === 'weekly' ? 'active' : ''}
   onClick={() => setCategory('weekly')}>Weekly</p>
  <p className={category === 'monthly' ? 'active' : ''}
   onClick={() => setCategory('monthly')}>Monthly</p>
</div>
</div>

)
}

export default ProfileCard