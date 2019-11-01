import {Types} from "../actions/types";

const INITIAL_STATE = {
    text: "",
    fontFamily: '',
    fontSize: '',
    fontStyle: '',
    fontAlign: {},
    fontColor: '',
    notes: []
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
        default:
            return state;
    }
};

export default noteReducer;