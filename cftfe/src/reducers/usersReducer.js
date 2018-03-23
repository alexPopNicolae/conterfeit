import * as types from './../actions/actionTypes';

export default function usersReducer(state=[], action) {
    switch(action.type) {
    case types.LOAD_USERS_SUCCES:
        return action.users;
    default:
        return state;    
    }
}