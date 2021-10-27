import React from 'react';
import { FcPlanner,FcAbout,FcPlus,FcInspection,FcSearch } from "react-icons/fc";

import '../style/BottomBar.css'

const BottomBar = ({toggle,activity}) => { 

return(
  <div className="bottomBar mobileOnly">
<div className="wrapper">
<div className="icon" 
onClick={null} ><FcAbout size={45}/></div>

<div className="icon" 
onClick={null} ><FcInspection size={60}/></div>

<div className="icon" 
onClick={() => toggle(!activity)} ><FcPlus size={75}/></div>

<div className="icon" 
onClick={null} ><FcPlanner size={60}/></div>

<div className="icon" 
onClick={''} ><FcSearch size={45}/></div>
</div>
  </div>
)
}

export default BottomBar