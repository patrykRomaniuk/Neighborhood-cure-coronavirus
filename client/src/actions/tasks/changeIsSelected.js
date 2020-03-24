import { CHANGE_IS_SELECTED } from '../constants';

export const changeIsSelected = data => async dispatch => {
    dispatch({ type: CHANGE_IS_SELECTED, payload: data })
}