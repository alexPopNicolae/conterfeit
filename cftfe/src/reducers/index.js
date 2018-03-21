import { default as actionHeader } from '../common/ActionHeader/ActionHeaderDuck';
import files from './fileReducer';
import fileCount from './fileCountReducer';
import headerVisibility from './headerVisibileReducer';
import selectedFiles from './selectedFilesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    actionHeader,
    files,
    fileCount,
    headerVisibility,
    selectedFiles
});

export default rootReducer;
