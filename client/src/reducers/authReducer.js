import {
    AUTH_FORM_FAIL,
    AUTH_FORM_SUCCESS,
    LOG_OUT,
    AUTH_ERROR,
    USER_LOADED,
    GET_USER_BY_ID,
    CHANGE_PASSWORD,
    REJECTED_CHANING_USER_DATA,
    ADD_DESCRIPTION,
    REMOVE_USER_DESCRIPTION,
    DELETE_USER,
    SINGLE_USER
} from '../actions/constants';

const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isLoading: true,
    isAuthenticated: false,
    singleUser: {},
    error: {}
}

const auth = (state = initialState, action) => {
    const { type,payload } = action;
    switch(type){
        case CHANGE_PASSWORD:
        case DELETE_USER:
            alert(payload);
            break;
        case AUTH_FORM_SUCCESS:
            localStorage.setItem('token',payload.token);
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                error: {}
            }
        case SINGLE_USER:
            return {
                ...state,
                singleUser: payload
            }
        case USER_LOADED:
        case ADD_DESCRIPTION:
        case REMOVE_USER_DESCRIPTION:
            localStorage.setItem('userLocation',payload.location.city)
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
        case REJECTED_CHANING_USER_DATA:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}

export default auth;