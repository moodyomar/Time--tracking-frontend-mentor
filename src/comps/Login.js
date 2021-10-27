import React, { useState } from 'react';
import { FaFacebookSquare,FaTwitter } from 'react-icons/fa';
import {useHistory} from "react-router-dom";
import '../style/Dashboard.css'
import '../style/Login.css'



const Login = () => { 

let [email,setEmail] = useState('')
let [password,setPassword] = useState('')

const history = useHistory()
const loginRequest = () => {
  if(email !== '' && password !== ''){
    return history.push('/dashboard')
  }
  alert('Please enter your details inorder to login')
}

return(

<div className='Login'>
  <div className="vectorBg"></div>
<div className="loginForm">
<h2>Login</h2>
<input type="text" 
onChange={e => setEmail(e.target.value)} placeholder="Email" />
<input type="password" 
onChange={e => setPassword(e.target.value)} placeholder="Password" />
<button className="loginBtn btn"
onClick={loginRequest}>Login</button>
<p htmlFor="">Forgot your password?</p>
</div>

<div className="registerForm">
<p htmlFor="">or connect with</p>
<div className="loginButtons">
<button className="fbLogin btn"><FaFacebookSquare/> Facebook</button>
<button className="twLogin btn"><FaTwitter/> Twitter</button>
</div>
<p style={{marginBottom:'50px'}} htmlFor="">Don't have account yet? <span>Sign up</span></p>
</div>

</div>

)
}

export default Login