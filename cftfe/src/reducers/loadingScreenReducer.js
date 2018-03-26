import * as types from './../actions/actionTypes';

export default function loadingScreenReducer(state=0, action) {
    switch(action.type) {
        case types.START_LOADING_SCREEN:
            state = state + 1;
        return state;
        case types.LOAD_USERS_SUCCES:
            state = state - 1;
        return state;   
        case types.GET_DATABASE_FILES:
            state = state - 1;
            return state; 
        default:
            return state;
    }
}