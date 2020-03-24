import axios from 'axios';
import { SINGLE_USER,AUTH_ERROR } from '../constants';

export const getUserByID = user_id => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:5000/api/auth/user/${user_id}`);
        dispatch({
            type: SINGLE_USER,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error })
    }
}