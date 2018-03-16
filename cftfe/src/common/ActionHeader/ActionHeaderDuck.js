
export const OPEN_MODAL = 'OPEN_MODAL';
const initialState = {
    modalStatus:false
};

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case OPEN_MODAL:
            return Object.assign({}, state, {modalStatus:true});
        default:
         return state;    
    }
}

const openModalAction = () => ({
    type:OPEN_MODAL
});

export function openModal() {
    return (dispatch) => {
        dispatch(openModalAction());
    }
}
