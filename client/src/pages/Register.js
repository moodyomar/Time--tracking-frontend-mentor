import React, { useState } from 'react';
import {useHistory,Link} from "react-router-dom";
import '../style/Dashboard.css'
import '../style/Login.css'



const Register = () => { 

let [email,setEmail] = useState('')
let [name,setName] = useState('')
let [password,setPassword] = useState('')
let [password2,setPassword2] = useState('')

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
<h2>Sign Up</h2>
<input type="text" 
onChange={e => setName(e.target.value)} 
placeholder="Your Name" />
<input type="text" 
onChange={e => setEmail(e.target.value)} placeholder="Email" />
<input type="password" 
onChange={e => setPassword(e.target.value)} placeholder="Password" />
<input type="password" 
onChange={e => setPassword2(e.target.value)} placeholder="Repeat Password" />
<button className="loginBtn btn"
onClick={loginRequest}>Sign Up</button>
</div>

<div className="registerForm">

<p style={{marginBottom:'50px'}} htmlFor="">Already a user? <Link to="/login"><span>Login</span></Link></p>
</div>

</div>

)
}

export default Register