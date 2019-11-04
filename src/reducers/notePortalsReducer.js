import {Types} from "../actions/types";

const INITIAL_STATE = {

    isNoteOpen: false,
    isEditOpen: false,
    isDeleteOpen: false
};

const notePortalsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case Types.IS_NOTE_OPEN:
            return {
                ...state,
                isNoteOpen: action.payload
            };
        case Types.IS_EDIT_OPEN:
            return {
                ...state,
                isEditOpen: action.payload
            };
        case Types.IS_DELETE_OPEN:
            return {
                ...state,
                isDeleteOpen: action.payload
            };


        default:
            return state;
    }
};

export default notePortalsReducer;