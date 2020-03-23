import { 
    AUTH_FORM_FAIL,
    AUTH_FORM_SUCCESS,
    AUTH_ERROR,
    USER_LOADED,
    LOG_OUT,
    GET_USER_BY_ID,
    CHANGE_PASSWORD,
    REJECTED_CHANING_USER_DATA,
    ADD_DESCRIPTION,
    REMOVE_USER_DESCRIPTION,
    DELETE_USER
} from './constants';
import axios from 'axios';
import setAuthToken from '../middleware/setAuthToken';

export const loadUser = () => async dispatch => {
    if(localStorage.getItem('token')){
        setAuthToken(localStorage.getItem('token'));
    }
    try {
        const response = await axios.get(`http://localhost:5000/api/auth/user`); 
        dispatch({
            type: USER_LOADED,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error });
    }
}

export const getUserByID = user_id => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:5000/api/auth/user/${user_id}`);
        dispatch({
            type: GET_USER_BY_ID,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error })
    }
}

export const loginUser = formData => async dispatch => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        const body = JSON.stringify(formData);

        const response = await axios.post(`http://localhost:5000/api/auth/login`,body,config);

        dispatch({
            type: AUTH_FORM_SUCCESS,
            payload: response.data
        });
        dispatch(loadUser());
    } catch (error) {
        console.log(error);
       dispatch({ type: AUTH_FORM_FAIL, payload: error });
    }
}

export const changePassword = (passwordForm,newPassword) => async dispatch => {
    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({ passwordForm,newPassword });

        const response = await axios.put('http://localhost:5000/api/auth/changePassword',body,config);

        dispatch({
            type: CHANGE_PASSWORD,
            payload: response.data
        });

    } catch (error) {
        dispatch({ type:  REJECTED_CHANING_USER_DATA,payload: error });
    }
}

export const registerUser = formData => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        const body = JSON.stringify(formData);
        const response = await axios.post(`http://localhost:5000/api/auth/register`,body,config);
        
        dispatch({
            type: AUTH_FORM_SUCCESS,
            payload: response.data
        });
        dispatch(loadUser());
    } catch (error) {
        dispatch({ type: AUTH_FORM_FAIL, payload: error });
    }
}

export const addDescription = description => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ description });
        const response = await axios.put(`http://localhost:5000/api/auth/put_description`,body,config);
        dispatch({
            type: ADD_DESCRIPTION,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error });
    }
}

export const removeUserAccount = () => async dispatch => {
    try {
        const response = await axios.delete('http://localhost:5000/api/auth/deleteUser');
        dispatch({
            type: DELETE_USER,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error });
    }
}

export const removeDescription = () => async dispatch => {
    try {
        const res = await axios.delete(`http://localhost:5000/api/auth/remove_description`);
        dispatch({
            type: REMOVE_USER_DESCRIPTION,
            payload: res.data
        });
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error });
    }
}

export const logOut = () => async dispatch => {
    try {
        dispatch({ type: LOG_OUT })
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error });
    }
}