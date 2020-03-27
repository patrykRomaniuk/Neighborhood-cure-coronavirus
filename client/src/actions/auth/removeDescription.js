import axios from 'axios';
import { REMOVE_USER_DESCRIPTION,AUTH_ERROR } from '../constants';

export const removeDescription = () => async dispatch => {
    try {
        const res = await axios.delete(`https://shielded-stream-32476.herokuapp.com/api/auth/remove_description`);
        dispatch({
            type: REMOVE_USER_DESCRIPTION,
            payload: res.data
        });
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error });
    }
}