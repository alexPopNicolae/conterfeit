export default function headerVisibileReducer(state=true, action) {
    switch(action.type) {
        case 'SHOW_FILE_OPERATIONS_HEADER':
            state = true;
            return state;
        case 'HIDE_FILE_OPERATIONS_HEADER':
            state=false;
            return state;
        default:
            return state;    
    }
}