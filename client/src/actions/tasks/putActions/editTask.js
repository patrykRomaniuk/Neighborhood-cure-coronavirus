import axios from 'axios';
import { EDIT_TASK,TASK_ERROR } from '../../constants';

export const editTask = (newDescription, task_id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ newDescription });

        const response =  await axios.put(`http:localhost:5000/api/tasks/changeTaskDescription/${task_id}`,body,config);
        dispatch({
            type: EDIT_TASK,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: TASK_ERROR, payload: error });
    }
}