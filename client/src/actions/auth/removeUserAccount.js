import axios from 'axios';
import { DELETE_USER,AUTH_ERROR } from '../constants';

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