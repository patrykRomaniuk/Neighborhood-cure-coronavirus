import { LOG_OUT,AUTH_ERROR } from '../constants';

export const logOut = () => async dispatch => {
    try {
        dispatch({ type: LOG_OUT })
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error });
    }
}