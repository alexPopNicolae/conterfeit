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

            let fileForDB = {};
            fileForDB.guid = new Date();  
            fileForDB.isDeleted = false;
            fileForDB.sizeBytes = 91038671;
            fileForDB.name = action.fileName; 
            fileForDB.sharing = 2;
            fileForDB.lastAccessedDate = "2018-03-09T03:27:50 -02:00";
            mockApi.addFile(fileForDB);

            newState.unshift(fileOptions);
            
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