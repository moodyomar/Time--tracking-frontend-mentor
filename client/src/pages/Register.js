import React, { useState } from 'react';
import {Link,Redirect} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { registerUser } from '../actions/auth';
import { toast } from "react-toastify";
import '../style/Dashboard.css'
import '../style/Login.css'



const Register = () => { 

let [formData,setFormData] = useState({
  name:'',
  email:'',
  password:'',
  repeatPassword:''
});
const {name,email,password,repeatPassword} = formData;

const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

const dispatch = useDispatch();
const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


const onSubmit = async(e) => {
  console.log('in on submit');
  
  e.preventDefault();
  if(password !== repeatPassword){
    toast.warning("Password doesn't match");
  }else{
    console.log('here 2');
    console.log(formData);
    dispatch(registerUser({name,email,password,repeatPassword}))
  }
}

if(isAuthenticated) return <Redirect to="/dashboard"/>


return(

<div className='Login'>
  <div className="vectorBg"></div>
<form className="loginForm" onSubmit={e => onSubmit(e)}>
<h2>Sign Up</h2>
<input type="text" 
onChange={e => onChange(e)} 
placeholder="Your Name" name="name" />
<input type="text" 
onChange={e => onChange(e)} placeholder="Email" name="email" />
<input type="password" 
onChange={e => onChange(e)} placeholder="Password" name="password" />
<input type="password" name="repeatPassword"
onChange={e => onChange(e)} placeholder="Repeat Password" />
<button className="loginBtn btn">Sign Up</button>

</form>

<div className="registerForm">

<p style={{marginBottom:'50px'}} htmlFor="">Already a user? <Link to="/login"><span>Login</span></Link></p>
</div>

</div>

)
}

export default Register