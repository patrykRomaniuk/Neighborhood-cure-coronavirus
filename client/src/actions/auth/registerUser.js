import axios from 'axios';
import { loadUser } from './loadUser';
import { AUTH_FORM_SUCCESS,AUTH_FORM_FAIL } from '../constants'

export const registerUser = formData => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        const body = JSON.stringify(formData);
        const response = await axios.post(`http:localhost:5000/api/auth/register`,body,config);
        
        dispatch({
            type: AUTH_FORM_SUCCESS,
            payload: response.data
        });
        dispatch(loadUser());
    } catch (error) {
        dispatch({ type: AUTH_FORM_FAIL, payload: error });
    }
}