import {
    ADD_TASK,
    GET_TASKS,
    TASK_ERROR,
    SELECT_TASK_ON_MAP,
    CHANGE_IS_SELECTED,
    SELECTED_TASK,
    GET_TASK_BY_ID,
    GET_USER_LOCATION_TASKS,
    DELETE_TASK_BY_ID
} from './constants';
import axios from 'axios';

export const addTask = (formData) => async dispatch => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        const body = JSON.stringify(formData);

        const response = await axios.post(`http://localhost:5000/api/tasks`,body,config);
        
        dispatch({
            type: ADD_TASK,
            payload: response.data
        });
        
    } catch (error) {
        dispatch({ type: TASK_ERROR, payload: error });
    }
}

export const getTasks = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:5000/api/tasks');
        dispatch({
            type: GET_TASKS,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: TASK_ERROR, payload: error });
    }
}

export const getUserTasks = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:5000/api/tasks/user_tasks');
        dispatch({
            type: GET_TASKS,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: TASK_ERROR, payload: error });
    }
}

export const getTaskByID = taskID => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:5000/api/tasks/taskID/${taskID}`);
        dispatch({
            type: GET_TASK_BY_ID,
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
        const response = await axios.put('http://localhost:5000/api/tasks/location_tasks/',body,config);
        dispatch({
            type: GET_USER_LOCATION_TASKS,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: TASK_ERROR, payload: error });
    }
}

export const editTask = task_id => async dispatch => {
    try {
        
    } catch (error) {
        dispatch({ type: TASK_ERROR, payload: error });
    }
}

export const deleteTaskByID = task_id => async dispatch => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/tasks/deleteTaskByID/${task_id}`);
        dispatch({
            type: DELETE_TASK_BY_ID,
            payload: response.data
        });
        dispatch(getUserTasks());
    } catch (error) {
        dispatch({ type: TASK_ERROR, payload: error });
    }
}

export const selectTask = () => async dispatch => {
    dispatch({ type: SELECT_TASK_ON_MAP });
}

export const changeIsSelected = data => async dispatch => {
    dispatch({ type: CHANGE_IS_SELECTED, payload: data })
}