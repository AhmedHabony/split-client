import {Types} from "../actions/types";
import {editNote, deleteNote} from "./../utils/noteItemControllls"

const INITIAL_STATE = {
    text: "",
    fontFamily: '',
    fontSize: '',
    fontStyle: '',
    fontAlign: {},
    fontColor: '',
    notes: [],
    openedNote: [],
    isNoteOpen: false,
    newNoteText: ''
};

const noteReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case Types.ADD_NEW_NOTE:
            return {
                ...state,
                notes: [...state.notes, {...action.payload}],
                text: ""
            };
        case Types.ADD_NOTE_TEXT: {
            return {
                ...state,
                text: action.payload
            }
        }
        case Types.ADD_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.payload
            };
        case Types.ADD_FONT_SIZE:
            return {
                ...state,
                fontSize: action.payload
            };
        case Types.ADD_FONT_STYLE:
            return {
                ...state,
                fontStyle: action.payload
            };
        case Types.ADD_FONT_ALIGN:
            return {
                ...state,
                fontAlign: action.payload
            };
        case Types.ADD_FONT_COLOR:
            return {
                ...state,
                fontColor: action.payload
            };
        case Types.OPEN_NOTE:
            return {
                ...state,
                openedNote: action.payload
            };
        case Types.IS_NOTE_OPEN:
            return {
                ...state,
                isNoteOpen: action.payload
            };
         case Types.EDIT_NOTE:
            return {
                ...state,
                notes: editNote(state.notes, action.payload.oldNote, action.payload.newNote )
            };
         case Types.DELETE_NOTE:
            return {
                ...state,
                notes: deleteNote(state.notes,  action.payload)
            };


        default:
            return state;
    }
};

export default noteReducer;