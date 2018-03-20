export function createFile(fileName) {
    return {type:'CREATE_FILE', fileName:fileName};
}
export function getDatabaseFiles() {
    return {type:'GET_DATABASE_FILES'};
}
export function getRecycleBinFiles() {
    return {type:'GET_RECYCLE_BIN_FILES'};
}
export function getLastDayAccessedFiles() {
    return {type:'GET_LAST_DAY_ACCESED_FILES'};
}
export function upCountSelectedFile() {
    return {type:'UP_COUNT_SELECTED_FILE'};
}
export function downCountSelectedFile() {
    return {type:'DOWN_COUNT_SELECTED_FILE'};
}
export function deselectAllFiles() {
    return {type:'DESELECT_ALL_FILES'};
}
export function showFilesOperationsHeader() {
    return {type:'SHOW_FILE_OPERATIONS_HEADER'};
}
export function hideFilesOperationHeader() {
    return {type:'HIDE_FILE_OPERATIONS_HEADER'};
}
export function addFileToSelectionList(fileId) {
    return {type:'ADD_FILE_TO_SELECTION_LIST', fileId:fileId};
}
export function removeFileFromSelectionList(fileId) {
    return {type:'REMOVE_FILE_FROM_SELECTION_LIST', fileId:fileId};
}
export function removeAllSelectedFilesFromSelectionList() {
    return {type:'REMOVE_ALL_SELECTED_FILES_FROM_SELECTION_LIST'};
}