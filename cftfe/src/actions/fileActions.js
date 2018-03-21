export function createFile(fileName) {
    return {type:'CREATE_FILE', fileName:fileName};
}
export function getDatabaseFiles() {
    return {type:'GET_DATABASE_FILES'};
}
export function getStateActiveFile() {
    return {type:'GET_STATE_ACTIVE_FILES'};
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
export function getHeaderWithDeleteAbility() {//aici trebuie sa lucrez
    return {type:'GET_HEADER_WITH_DELETE_ABILITY'};
}
export function getHeaderWithRestoreAbility() {//aici trebuie sa lucrez
    return {type:'GET_HEADER_WITH_RESTORE_ABILITY'};
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
export function sortFilesBasedOnKeyWord(keyword) {
    return {type:'SORT_FILES_BASED_ON_KEYWORD', keyword:keyword};
}
export function deleteSelectedFiles(selectedFiles) {
    return {type:'DELETE_SELECTED_FILES', files:selectedFiles};
}
export function restoreSelectedFiles(selectedFiles) {
    return {type:'RESTORE_SELECTED_FILES', files:selectedFiles};
}