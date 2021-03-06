import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import post from './posts';
import alert from './alert';

export default combineReducers({
  post,
  auth,
  profile,
  alert
});
