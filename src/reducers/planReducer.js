import {Types} from "../actions/types";
import {editPlan} from "../utils/editPlan";

const INITIAL_STATE = {
    type: 'to-Do',
    toDos:[],
    mainFocus: [],
    wishes: [],
    calendarDate: ''
};


const planReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case Types.USE_PLAN_KIND:
            return {
                ...state,
                type: action.payload
            };
        case Types.ADD_TO_TODO:
            return {
                ...state,
                toDos: [...state.toDos, {...action.payload}]
            };
        case Types.ADD_TO_MAIN_FOCUS:
            return {
                ...state,
                mainFocus: [...state.mainFocus, {...action.payload}]
            };
        case Types.ADD_TO_WISHES:
            return {
                ...state,
                wishes: [...state.wishes, {...action.payload}]
            };
        case Types.ADD_CALENDAR_DATE:
            return {
                ...state,
                calendarDate: action.payload
            };
        case Types.EDIT_TODO_PLAN:
            return {
                ...state,
                toDos: editPlan(state.toDos, action.payload.oldPlan, action.payload.newPlan)
            };
        case Types.EDIT_MAIN_FOCUS_PLAN:
            return {
                ...state,
                mainFocus: editPlan(state.toDos, action.payload.oldPlan, action.payload.newPlan)
            };

        default:
            return state
    }
};



export default  planReducer
