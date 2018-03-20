import _ from 'lodash';
export default function selectedFilesReducer(state=[], action) {
    switch(action.type) {
        case 'ADD_FILE_TO_SELECTION_LIST':
            state.push(action.fileId);
            return state;
        case 'REMOVE_FILE_FROM_SELECTION_LIST':
            let newState = _.remove(state, (item) => { return item !== action.fileId});
            return newState;
        case 'REMOVE_ALL_SELECTED_FILES_FROM_SELECTION_LIST':
            let empty = [];
            return empty;
        default:
            return state;        
    }
}