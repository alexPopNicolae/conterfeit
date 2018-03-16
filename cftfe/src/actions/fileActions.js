//create file action creator
export function createFile(fileName) {
    return {type:'CREATE_FILE', fileName:fileName};
}