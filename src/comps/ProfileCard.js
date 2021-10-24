import React from 'react';


const ProfileCard = ({category,setCategory}) => { 

return(

<div className="profileCardBack">
<div className="profileCardFront">
  <div className="flex-col">
    <div className="profilePicture"></div>
    <div className="rowOnMobile">
    <p className="reportsFor">Reports for</p>
    <h2 className="profileName">Jeremy Robson</h2>
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