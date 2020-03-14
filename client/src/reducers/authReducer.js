import {
    AUTH_FORM_FAIL,
    AUTH_FORM_SUCCESS,
    LOG_OUT,
    AUTH_ERROR,
    USER_LOADED
} from '../actions/constants';

const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isLoading: true,
    isAuthenticated: false,
    error: {}
}

const auth = (state = initialState, action) => {
    const { type,payload } = action;
    switch(type){
        case AUTH_FORM_SUCCESS:
            localStorage.setItem('token',payload.token);
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                error: {}
            }
        case USER_LOADED:
            localStorage.getItem('token');
            return {
                ...state,
                isAuthenticated: true,
                user: payload,
                isLoading: false,
                error: {}
            }
        case LOG_OUT:
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isLoading: true
            }
        case AUTH_FORM_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isLoading: true,
                error: payload
            }
        default:
            return state;
    }
}

export default auth;