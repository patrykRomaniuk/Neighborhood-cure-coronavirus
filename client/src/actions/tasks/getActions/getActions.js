import axios from 'axios';
import {
     GET_TASK_BY_ID,
     GET_USER_TASKS,
     GET_TASKS,
     GET_USER_LOCATION_TASKS,
     TASK_ERROR 
} from '../../constants';

export const getTaskByID = taskID => async dispatch => {
    try {
        const response = await axios.get(`http:localhost:5000/api/tasks/taskID/${taskID}`);
        dispatch({
            type: GET_TASK_BY_ID,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: TASK_ERROR, payload: error });
    }
}

export const getTasks = () => async dispatch => {
    try {
        const response = await axios.get('http:localhost:5000/api/tasks');
        dispatch({
            type: GET_TASKS,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: TASK_ERROR, payload: error });
    }
}

export const getUserLocationTasks = userLocation => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({ userLocation });
        const response = await axios.put('http:localhost:5000/api/tasks/location_tasks/',body,config);
        dispatch({
            type: GET_USER_LOCATION_TASKS,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: TASK_ERROR, payload: error });
    }
}

export const getUserTasks = () => async dispatch => {
    try {
        const response = await axios.get('http:localhost:5000/api/tasks/user_tasks');
        dispatch({
            type: GET_USER_TASKS,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: TASK_ERROR, payload: error });
    }
}