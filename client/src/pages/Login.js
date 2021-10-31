import React, { useState } from 'react';
import { FaFacebookSquare,FaTwitter } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory,Link,Redirect} from "react-router-dom";
import { login } from '../actions/auth';
import '../style/Dashboard.css'
import '../style/Login.css'



const Login = () => { 
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const [formData,setFormData] = useState({
    email:'',
    password:'',
  });
  const {email,password} = formData;
  
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  
  const onSubmit = async(e) => {
    console.log('in on submit ',formData);
    e.preventDefault();
    dispatch(login(email,password));
  }

  if(isAuthenticated) return <Redirect to="/dashboard"/>

return(

<div className='Login'>
  <div className="vectorBg"></div>
<form className="loginForm" onSubmit={onSubmit}>
<h2>Login</h2>
<input type="text" name="email"
onChange={e => onChange(e)} placeholder="Email" />
<input type="password" name="password"
onChange={e => onChange(e)} placeholder="Password" />
<button className="loginBtn btn">Login</button>
<p htmlFor="">Forgot your password?</p>
</form>

<div className="registerForm">
<p htmlFor="">or connect with</p>
<div className="loginButtons">
<button className="fbLogin btn"><FaFacebookSquare/> Facebook</button>
<button className="twLogin btn"><FaTwitter/> Twitter</button>
</div>
<p style={{marginBottom:'50px'}} htmlFor="">Don't have account yet? <Link to="/register"><span>Sign up</span></Link></p>
</div>

</div>

)
}

export default Login