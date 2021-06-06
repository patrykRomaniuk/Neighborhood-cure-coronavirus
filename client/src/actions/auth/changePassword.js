import axios from 'axios';
import { CHANGE_PASSWORD,REJECTED_CHANING_USER_DATA } from '../constants';

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
        dispatch({ type: REJECTED_CHANING_USER_DATA, payload: error });
    }
}