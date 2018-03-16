import { default as actionHeader } from '../common/ActionHeader/ActionHeaderDuck';
import files from './fileReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    actionHeader,
    files
});

export default rootReducer;
