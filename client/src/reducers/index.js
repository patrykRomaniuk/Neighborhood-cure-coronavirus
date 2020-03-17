import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import auth from './authReducer';

export default combineReducers({
    auth,
    taskReducer
});