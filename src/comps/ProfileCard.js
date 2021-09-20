import React from 'react';


const ProfileCard = () => { 

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
  <p>Daily</p>
  <p>Weekly</p>
  <p>Monthly</p>
</div>
</div>

)
}

export default ProfileCard