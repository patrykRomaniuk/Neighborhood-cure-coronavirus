import axios from 'axios';
import { ADD_DESCRIPTION,AUTH_ERROR } from '../constants';

export const addDescription = description => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ description });
        const response = await axios.put(`https://shielded-stream-32476.herokuapp.com/api/auth/put_description`,body,config);
        dispatch({
            type: ADD_DESCRIPTION,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error });
    }
}