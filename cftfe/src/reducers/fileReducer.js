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
        default: 
            return state;    
    }
}