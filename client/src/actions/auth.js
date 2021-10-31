import axios from 'axios';
import { toast } from "react-toastify";

export const registerUser = ({name,email,password,repeatPassword}) => async dispatch => {

  try {
    const res = await axios.post(`/users/signup`,{name,email,password,repeatPassword})
    dispatch({
      type:'REGISTER_SUCCESS',
      payload:res.data
    })
    // dispatch(loadUser()); 
    toast.success(`Hey ${name.split(' ')[0]} 👋 , Welcome to TimeTracker!`)
  } catch (err) {
    const errors = err.response.data
    
    if(typeof(errors) === 'object'){
      errors.forEach(error => toast.error(error.message))
    }else toast.warning(errors)
    dispatch({
      type:'REGISTER_FAIL'
    })
  }
}

export const login = (email,password) => async dispatch => {

  try {
    const res = await axios.post(`users/login`,{email,password})
    dispatch({
      type:'LOGIN_SUCCESS',
      payload:res.data
    })
    // dispatch(loadUser());
    toast.success("Logged in successfully")
  } catch (err) {
    const errors = err.response.data
    if(typeof(errors) === 'object'){
      errors.forEach(error => toast.error(error.message))
    }else toast.warning(errors)
    dispatch({
      type:'LOGIN_FAIL'
    })
  }
}