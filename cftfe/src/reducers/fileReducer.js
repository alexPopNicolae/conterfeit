import mockApi from './../api/mockFileApi';

export default function fileReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_FILE':
            let newState = [...state];
            let fileOptions = {};
            fileOptions.name = action.fileName;
            fileOptions.size = '62.4M';
            fileOptions.date = '30 Sep 2016';
            fileOptions.sharing = state.length%2 == 0 ? 'Private':'Public';
            fileOptions.selected = false;
            newState.push(fileOptions);
            return newState;
         case 'GET_DATABASE_FILES':
            let databaseFiles = [];
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

        default: 
            return state;    
    }
}