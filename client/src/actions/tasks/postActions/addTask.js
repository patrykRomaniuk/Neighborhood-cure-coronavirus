import axios from 'axios';
import { TASK_ERROR,ADD_TASK } from '../../constants';

export const addTask = formData => async dispatch => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        const body = JSON.stringify(formData);

        const response = await axios.post(`https://shielded-stream-32476.herokuapp.com/api/tasks`,body,config);
        
        dispatch({
            type: ADD_TASK,
            payload: response.data
        });
        
    } catch (error) {
        dispatch({ type: TASK_ERROR, payload: error });
    }
}