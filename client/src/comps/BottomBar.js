import React from 'react';
import { FcPlanner,FcPlus,FcInspection,FcSearch,FcHome } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { openActivityForm } from '../actions/activity';
import '../style/BottomBar.css'

const BottomBar = () => { 

let dispatch = useDispatch()

return(
  <div className="bottomBar mobileOnly">
<div className="wrapper">

<Link to="/calendar"><div className="icon"><FcPlanner size={45}/></div></Link>
<Link to="/todos"><div className="icon"><FcInspection size={60}/></div></Link>

<Link to="/dashboard"><div className="icon"><FcHome size={75}/></div></Link>
<div className="icon" 
onClick={() => dispatch(openActivityForm())} ><FcPlus size={60}/></div>


<div className="icon" ><FcSearch size={45}/></div>
</div>
  </div>
)
}

export default BottomBar