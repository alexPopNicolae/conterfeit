import * as types from './../actions/actionTypes';

export default function fileCountReducer(state = 0, action) {
    switch(action.type) {
        case types.UP_COUNT_SELECTED_FILE:
            state = state + 1;
            return state;
        case types.DOWN_COUNT_SELECTED_FILE:
            state=state-1;
            return state;
        case types.DESELECT_ALL_FILES:
            state = 0;
            return state;    
        default: 
            return state;        
    }
}