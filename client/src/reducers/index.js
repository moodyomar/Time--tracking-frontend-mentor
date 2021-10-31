import { combineReducers } from "redux";
import {activity} from './activity';
import {auth} from './auth';


export default combineReducers({
  activity,
  auth,
})
