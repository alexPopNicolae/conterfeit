import { default as actionHeader } from '../common/ActionHeader/ActionHeaderDuck';
import files from './fileReducer';
import fileCount from './fileCountReducer';
import headerVisible from './headerVisibileReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    actionHeader,
    files,
    fileCount,
    headerVisible
});

export default rootReducer;
