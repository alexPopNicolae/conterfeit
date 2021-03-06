import * as types from './../actions/actionTypes';

const initialState = {view:1};

export default function sidebarViewReducer(state = initialState, action) {
    switch(action.type) {
        case types.SET_STATE_FOR_SORT_VIEW:
            return Object.assign({},state, 
            {
                view:action.view
            });
        default:
            return state;    
    }
}