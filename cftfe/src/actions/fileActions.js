export function createFile(fileName) {
    return {type:'CREATE_FILE', fileName:fileName};
}
export function getDatabaseFiles() {
    return {type:'GET_DATABASE_FILES'};
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