import * as types from './actionTypes';
import usersApi from './../api/mockUsersApi';
import mockApi from './../api/mockFileApi';

export function createFile(fileName) {
    return {type:types.CREATE_FILE, fileName:fileName};
}
export function getDatabaseFiles(files) {
    return {type:types.GET_DATABASE_FILES, files:files};
}
export function getStateActiveFile() {
    return {type:types.GET_STATE_ACTIVE_FILES};
}
export function getRecycleBinFiles() {
    return {type:types.GET_RECYCLE_BIN_FILES};
}
export function getLastDayAccessedFiles() {
    return {type:types.GET_LAST_DAY_ACCESED_FILES};
}
export function upCountSelectedFile() {
    return {type:types.UP_COUNT_SELECTED_FILE};
}
export function downCountSelectedFile() {
    return {type:types.DOWN_COUNT_SELECTED_FILE};
}
export function deselectAllFiles() {
    return {type:types.DESELECT_ALL_FILES};
}
export function getHeaderWithDeleteAbility() {
    return {type:types.GET_HEADER_WITH_DELETE_ABILITY};
}
export function getHeaderWithRestoreAbility() {
    return {type:types.GET_HEADER_WITH_RESTORE_ABILITY};
}
export function addFileToSelectionList(fileId) {
    return {type:types.ADD_FILE_TO_SELECTION_LIST, fileId:fileId};
}
export function removeFileFromSelectionList(fileId) {
    return {type:types.REMOVE_FILE_FROM_SELECTION_LIST, fileId:fileId};
}
export function removeAllSelectedFilesFromSelectionList() {
    return {type:types.REMOVE_ALL_SELECTED_FILES_FROM_SELECTION_LIST};
}
export function sortFilesBasedOnKeyWord(keyword) {
    return {type:types.SORT_FILES_BASED_ON_KEYWORD, keyword:keyword};
}

export function restoreSelectedFiles(selectedFiles) {
    return {type:types.RESTORE_SELECTED_FILES, files:selectedFiles};
}
export function changeSharingOption(option, selectedFiles) {
    return {type:types.CHANGE_SHARING_OPTION, option:option, files:selectedFiles};
}
export function setStateForSortView(view) {
    return {type:types.SET_STATE_FOR_SORT_VIEW, view:view};
}
export function sortByNameAscendent() {
    return {type:types.SORT_BY_NAME_ASCENDENT};
}
export function sortByNameDescendent() {//reducer missing
    return {type:types.SORT_BY_NAME_DESCENDENT};
}
export function sortByDateAscendent() {
    return {type:types.SORT_BY_DATE_ASCENDENT};
}
export function sortByDateDescendent() {//reducer missing
    return {type:types.SORT_BY_DATE_DESCENDENT};
}
export function sortBySizeAscendent() {
    return {type:types.SORT_BY_SIZE_ASCENDENT};
}
export function sortBySizeDescendent() {//reducer missing
    return {type:types.SORT_BY_SIZE_DESCENDENT};
}
export function resetSortingButtonsOnNewPage() {//reducer missing
    return {type:types.RESET_SORTING_BUTTONS_ON_NEW_PAGE};
}

export function loadUsersSucces(users) {
    return {type:types.LOAD_USERS_SUCCES, users:users};
}

export function startLoadingScreen()  {
    return {type:types.START_LOADING_SCREEN};
}

//redux thunk function for handling asynchronus call - redux thunk action creator=                                                                              
export function loadUsers() {
    return function(dispatch) {
        dispatch(startLoadingScreen());
        return usersApi.getAllUsers().then(users => {
            dispatch(loadUsersSucces(users))
        }).catch(error=>{
            throw(error);
        })
    }
}

export function loadDatabaseFiles() {
    return function(dispatch) {
        dispatch(startLoadingScreen());
        return mockApi.getAllFiles().then(files => {
            dispatch(getDatabaseFiles(files));
        }).catch(error => {
            throw(error);
        });
    }
}

export function loadDeletedAndSelectedFiles(selectedFiles) {
    return function(dispatch) {
        dispatch(startLoadingScreen());
        return mockApi.deleteSelectedFiles(selectedFiles).then(files=>{
            dispatch(getDatabaseFiles(files));
        }).catch(error => {
            throw(error);
        })
    }
}

//thunk for loading files database files
//1. primul lucru de facut este sa schimbam mockApi 
//astfe incat sa returneze un promise cu delay - done

//2. al doilea lucru este sa scoatem api-ul din reducere si sa le punem
//in thunk action creators

//3. al treilea lucru este sa schimbam action creaturile


//thunk for loading recyble bin files
//thunk for loading lastday accessed files

