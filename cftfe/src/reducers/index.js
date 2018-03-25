import { default as actionHeader } from '../common/ActionHeader/ActionHeaderDuck';
import files from './fileReducer';
import fileCount from './fileCountReducer';
import headerVisibility from './headerVisibileReducer';
import selectedFiles from './selectedFilesReducer';
import sidebarView from './sidebarViewReducer';
import activeLoadingScreen from './loadingScreenReducer';
import users from './usersReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    actionHeader,
    files,
    fileCount,
    headerVisibility,
    selectedFiles,
    sidebarView,
    users,
    activeLoadingScreen
});

export default rootReducer;
