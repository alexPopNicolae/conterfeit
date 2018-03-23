import * as types from './../actions/actionTypes';

const initialState = {deleteVisible:true, restoreVisible:false};

export default function headerVisibileReducer(state=initialState, action) {
    switch(action.type) {
        case types.GET_HEADER_WITH_DELETE_ABILITY:
            return  Object.assign({}, state, {
                deleteVisible: true,
                restoreVisible:false
              })
        case types.GET_HEADER_WITH_RESTORE_ABILITY:
            return  Object.assign({}, state, {
                deleteVisible: false,
                restoreVisible:true
            })
        default:
            return state;    
    }
}