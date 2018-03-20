export default function fileCountReducer(state = 0, action) {
    switch(action.type) {
        case 'UP_COUNT_SELECTED_FILE':
            state = state + 1;
            return state;
        case 'DOWN_COUNT_SELECTED_FILE':
            state=state-1;
            return state;
        case 'DESELECT_ALL_FILES':
            state = 0;
            return state;    
        default: 
            return state;        
    }
}