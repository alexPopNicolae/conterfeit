import mockApi from './../api/mockFileApi';
import _ from 'lodash';
import * as types from './../actions/actionTypes';

export default function fileReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_FILE:
            let newState = [...state];
            let fileOptions = {};
            fileOptions.name = action.fileName;
            fileOptions.size = 123456;
            fileOptions.date = '30 Sep 2016';
            fileOptions.sharing = 1;
            fileOptions.selected = false;
            newState.unshift(fileOptions);
            return newState;

        case types.RESTORE_SELECTED_FILES:
            let filesWithoutRestored = mockApi.restoreSelectedFiles(action.files);
            let transformedFilesWithoutRestored = filesWithoutRestored.map((item, index) => {
                let transformedRow = {};
                transformedRow.id = item.guid;
                transformedRow.name = item.name;
                transformedRow.date = mockApi.formatDate(item.lastAccessedDate);
                transformedRow.milisecondsTime = mockApi.getTimeFromDate(mockApi.formatDate(item.lastAccessedDate));
                transformedRow.sharing = mockApi.getSharingType(item.sharing);
                transformedRow.size = mockApi.formatFileSize(item.sizeBytes);
                transformedRow.actualSize = item.sizeBytes;
                transformedRow.isDeleted = item.isDeleted;
                transformedRow.selected = false;
                return transformedRow;  
          });
          return transformedFilesWithoutRestored;

        case types.CHANGE_SHARING_OPTION:
            let filesAfterShare = mockApi.changeSharingOption(action.option, action.files);  
            return state.map((item)=>{return item});

         case types.GET_DATABASE_FILES:
            let data = action.files;
            let dataForRow = data.map((item, index) => {
                  let transformedRow = {};
                  transformedRow.id = item.guid;
                  transformedRow.name = item.name;
                  transformedRow.date = mockApi.formatDate(item.lastAccessedDate);
                  transformedRow.milisecondsTime = mockApi.getTimeFromDate(mockApi.formatDate(item.lastAccessedDate));
                  transformedRow.sharing = mockApi.getSharingType(item.sharing);
                  transformedRow.size = mockApi.formatFileSize(item.sizeBytes);
                  transformedRow.actualSize = item.sizeBytes;
                  transformedRow.isDeleted = item.isDeleted;
                  transformedRow.selected = false;
                  return transformedRow;  
            });
            return dataForRow;

            case types.GET_STATE_ACTIVE_FILES:
                let sameStateUnselected = state.map((item)=>{return item});
                return sameStateUnselected;

            case types.GET_LAST_DAY_ACCESED_FILES:
            let lastDayAccesed = mockApi.getAccesedLastDay();
            let lastDayTransformed = lastDayAccesed.map((item, index) => {
                let transformedRow = {};
                transformedRow.id = item.guid;
                transformedRow.name = item.name;
                transformedRow.date = mockApi.formatDate(item.lastAccessedDate);
                transformedRow.milisecondsTime = mockApi.getTimeFromDate(mockApi.formatDate(item.lastAccessedDate));
                transformedRow.sharing = mockApi.getSharingType(item.sharing);
                transformedRow.size = mockApi.formatFileSize(item.sizeBytes);
                transformedRow.actualSize = item.sizeBytes;
                transformedRow.isDeleted = item.isDeleted;
                transformedRow.selected = false;
                return transformedRow;  
          });
          return lastDayTransformed;

           case types.GET_RECYCLE_BIN_FILES: 
            let deletedFiles = mockApi.getAllDeletedFiles();
            let tranformedFiles = deletedFiles.map((item, index) => {
                let transformedRow = {};
                transformedRow.id = item.guid;
                transformedRow.name = item.name;
                transformedRow.date = mockApi.formatDate(item.lastAccessedDate);
                transformedRow.milisecondsTime = mockApi.getTimeFromDate(mockApi.formatDate(item.lastAccessedDate));
                transformedRow.sharing = mockApi.getSharingType(item.sharing);
                transformedRow.size = mockApi.formatFileSize(item.sizeBytes);
                transformedRow.actualSize = item.sizeBytes;
                transformedRow.isDeleted = item.isDeleted;
                transformedRow.selected = false;
                return transformedRow;  
          });
            return tranformedFiles;

        case types.SORT_FILES_BASED_ON_KEYWORD:
            let keyWordFiles = mockApi.getFilesBasedOnKeyWord(action.keyword);
            let keyTranformedFiles = keyWordFiles.map((item, index) => {
                let transformedRow = {};
                transformedRow.id = item.guid;
                transformedRow.name = item.name;
                transformedRow.date = mockApi.formatDate(item.lastAccessedDate);
                transformedRow.milisecondsTime = mockApi.getTimeFromDate(mockApi.formatDate(item.lastAccessedDate));
                transformedRow.sharing = mockApi.getSharingType(item.sharing);
                transformedRow.size = mockApi.formatFileSize(item.sizeBytes);
                transformedRow.actualSize = item.sizeBytes;
                transformedRow.isDeleted = item.isDeleted;
                transformedRow.selected = false;
                return transformedRow;  
          });
            return keyTranformedFiles;

        case types.SORT_BY_NAME_ASCENDENT:
            let sortedByName = _.sortBy(state, 'name');
            return sortedByName;
        case types.SORT_BY_DATE_ASCENDENT:
            let sortedByDate = _.sortBy(state, 'milisecondsTime');
            return sortedByDate;
        case types.SORT_BY_SIZE_ASCENDENT:
            let sortedBySize = _.sortBy(state, 'actualSize');
            return sortedBySize;
        default: 
            return state;    
    }
}