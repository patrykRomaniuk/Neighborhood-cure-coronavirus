import axios from 'axios';
import { DELETE_USER,AUTH_ERROR } from '../constants';

export const removeUserAccount = () => async dispatch => {
    try {
        const response = await axios.delete('https://shielded-stream-32476.herokuapp.com/api/auth/deleteUser');
        dispatch({
            type: DELETE_USER,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error });
    }
}