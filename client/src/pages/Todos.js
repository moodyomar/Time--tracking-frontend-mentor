import React from 'react';
import { useSelector } from 'react-redux';
import AddActivity from '../comps/AddActivity';
import BottomBar from '../comps/BottomBar';


const Todos = () => { 

let {activityForm} = useSelector(state => state.activity)


return(

<div className=''>
<h1>Todos</h1>
{ activityForm &&
  <AddActivity />
}
<BottomBar />
</div>

)
}

export default Todos