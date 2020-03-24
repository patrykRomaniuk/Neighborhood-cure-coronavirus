import { SELECT_TASK_ON_MAP } from '../constants';

export const selectTask = () => async dispatch => {
    dispatch({ type: SELECT_TASK_ON_MAP });
}