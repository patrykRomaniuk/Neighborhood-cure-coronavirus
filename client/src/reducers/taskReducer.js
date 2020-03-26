import {
    ADD_TASK,
    GET_TASKS,
    TASK_ERROR,
    CHANGE_IS_SELECTED,
    SELECTED_TASK,
    GET_TASK_BY_ID,
    GET_USER_LOCATION_TASKS,
    DELETE_TASK_BY_ID,
    EDIT_TASK,
    GET_USER_TASKS
} from '../actions/constants';

const initialState = {
    tasks: [],
    task: {},
    locationTasks: [],
    isSelectedTask: false,
    userTasks: null,
    errors: {}
}

const taskReducer = (state = initialState, action) => {
    const { type,payload } = action;
    switch(type){
        case GET_USER_LOCATION_TASKS:
            localStorage.getItem('userLocation');
            return {
                ...state,
                locationTasks: payload
            }
        case GET_USER_TASKS:
            return {
                ...state,
                userTasks: payload
            }
        case CHANGE_IS_SELECTED:
            return {
                ...state,
                isSelectedTask: payload
            }
        case ADD_TASK:
        case SELECTED_TASK:
        case GET_TASK_BY_ID:
            return {
                ...state,
                task: payload
            }
        case GET_TASKS:
        case DELETE_TASK_BY_ID:
            return {
                ...state,
                tasks: payload
            }
        case EDIT_TASK:
            alert(payload);
            break;
        case TASK_ERROR:
            return {
                ...state,
                tasks: [],
                task: {},
                locationTasks: [],
                isSelectedTask: false,
                errors: payload
            }
        default:
            return state;
    }
}

export default taskReducer;