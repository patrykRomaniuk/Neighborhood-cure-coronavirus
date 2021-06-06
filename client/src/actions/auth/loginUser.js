import { AUTH_FORM_SUCCESS,AUTH_FORM_FAIL } from '../constants';
import { loadUser } from './loadUser';
import axios from 'axios';

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
