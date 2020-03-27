import axios from 'axios';
import { getUserTasks } from '../getActions/getActions';
import { DELETE_TASK_BY_ID,TASK_ERROR } from '../../constants';

export const deleteTaskByID = task_id => async dispatch => {
    try {
        const response = await axios.delete(`https://shielded-stream-32476.herokuapp.com/api/tasks/deleteTaskByID/${task_id}`);
        dispatch({
            type: DELETE_TASK_BY_ID,
            payload: response.data
        });
        dispatch(getUserTasks());
    } catch (error) {
        dispatch({ type: TASK_ERROR, payload: error });
    }
}