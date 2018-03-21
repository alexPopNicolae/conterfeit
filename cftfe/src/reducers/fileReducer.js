import mockApi from './../api/mockFileApi';

export default function fileReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_FILE':
            let newState = [...state];
            let fileOptions = {};
            fileOptions.name = action.fileName;
            fileOptions.size = 123456;
            fileOptions.date = '30 Sep 2016';
            fileOptions.sharing = 1;
            fileOptions.selected = false;

            let fileForDB = {};
            let date = new Date();
            fileForDB.guid = date.getTime();  
            fileForDB.isDeleted = false;
            fileForDB.sizeBytes = 91038671;
            fileForDB.name = action.fileName; 
            fileForDB.sharing = 2;
            fileForDB.lastAccessedDate = "2018-03-09T03:27:50 -02:00";
            mockApi.addFile(fileForDB);
            newState.unshift(fileOptions);
            return newState;
        case 'DELETE_SELECTED_FILES':
            let filesWithoutDeleted = mockApi.deleteSelectedFiles(action.files);
            let transformetFileWithoutDeletes = filesWithoutDeleted.map((item, index) => {
                let transformedRow = {};
                transformedRow.id = item.guid;
                transformedRow.name = item.name;
                transformedRow.date = mockApi.formatDate(item.lastAccessedDate);
                transformedRow.sharing = mockApi.getSharingType(item.sharing);
                transformedRow.size = mockApi.formatFileSize(item.sizeBytes);
                transformedRow.isDeleted = item.isDeleted;
                transformedRow.selected = false;
                return transformedRow;  
          });
          return transformetFileWithoutDeletes;

        case 'RESTORE_SELECTED_FILES':
            let filesWithoutRestored = mockApi.restoreSelectedFiles(action.files);
            let transformedFilesWithoutRestored = filesWithoutRestored.map((item, index) => {
                let transformedRow = {};
                transformedRow.id = item.guid;
                transformedRow.name = item.name;
                transformedRow.date = mockApi.formatDate(item.lastAccessedDate);
                transformedRow.sharing = mockApi.getSharingType(item.sharing);
                transformedRow.size = mockApi.formatFileSize(item.sizeBytes);
                transformedRow.isDeleted = item.isDeleted;
                transformedRow.selected = false;
                return transformedRow;  
          });
          return transformedFilesWithoutRestored;

        case 'CHANGE_SHARING_OPTION':
            let filesAfterShare = mockApi.changeSharingOption(action.option, action.files);  
            return state;

         case 'GET_DATABASE_FILES':
            let data = mockApi.getAllFiles();
            let dataForRow = data.map((item, index) => {
                  let transformedRow = {};
                  transformedRow.id = item.guid;
                  transformedRow.name = item.name;
                  transformedRow.date = mockApi.formatDate(item.lastAccessedDate);
                  transformedRow.sharing = mockApi.getSharingType(item.sharing);
                  transformedRow.size = mockApi.formatFileSize(item.sizeBytes);
                  transformedRow.isDeleted = item.isDeleted;
                  transformedRow.selected = false;
                  return transformedRow;  
            });
            return dataForRow;

            case 'GET_STATE_ACTIVE_FILES':
                let sameStateUnselected = state.map((item)=>{return item});
                return sameStateUnselected;

            case 'GET_LAST_DAY_ACCESED_FILES':
            let lastDayAccesed = mockApi.getAccesedLastDay();
            let lastDayTransformed = lastDayAccesed.map((item, index) => {
                let transformedRow = {};
                transformedRow.id = item.guid;
                transformedRow.name = item.name;
                transformedRow.date = mockApi.formatDate(item.lastAccessedDate);
                transformedRow.sharing = mockApi.getSharingType(item.sharing);
                transformedRow.size = mockApi.formatFileSize(item.sizeBytes);
                transformedRow.isDeleted = item.isDeleted;
                transformedRow.selected = false;
                return transformedRow;  
          });
          return lastDayTransformed;

           case 'GET_RECYCLE_BIN_FILES': 
            let deletedFiles = mockApi.getAllDeletedFiles();
            let tranformedFiles = deletedFiles.map((item, index) => {
                let transformedRow = {};
                transformedRow.id = item.guid;
                transformedRow.name = item.name;
                transformedRow.date = mockApi.formatDate(item.lastAccessedDate);
                transformedRow.sharing = mockApi.getSharingType(item.sharing);
                transformedRow.size = mockApi.formatFileSize(item.sizeBytes);
                transformedRow.isDeleted = item.isDeleted;
                transformedRow.selected = false;
                return transformedRow;  
          });
            return tranformedFiles;

        case 'SORT_FILES_BASED_ON_KEYWORD':
            let keyWordFiles = mockApi.getFilesBasedOnKeyWord(action.keyword);
            let keyTranformedFiles = keyWordFiles.map((item, index) => {
                let transformedRow = {};
                transformedRow.id = item.guid;
                transformedRow.name = item.name;
                transformedRow.date = mockApi.formatDate(item.lastAccessedDate);
                transformedRow.sharing = mockApi.getSharingType(item.sharing);
                transformedRow.size = mockApi.formatFileSize(item.sizeBytes);
                transformedRow.isDeleted = item.isDeleted;
                transformedRow.selected = false;
                return transformedRow;  
          });
            return keyTranformedFiles;

        default: 
            return state;    
    }
}