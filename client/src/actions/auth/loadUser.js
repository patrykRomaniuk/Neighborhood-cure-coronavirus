import { USER_LOADED, AUTH_ERROR } from '../constants';
import axios from 'axios';
import setAuthToken from '../../middleware/setAuthToken';

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