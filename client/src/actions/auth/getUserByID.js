import axios from 'axios';
import { GET_USER_BY_ID,AUTH_ERROR } from '../constants';

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