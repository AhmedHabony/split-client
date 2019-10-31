import {Types} from "../actions/types";
import {editincome} from "../utils/editIncome";
import {deletePlan} from "../utils/deletePlan";

const INITIAL_STATE = {
    incomes: []
};

const incomesReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case Types.ADD_NEW_INCOME:
            return{
                ...state,
                incomes: [...state.incomes, {...action.payload}]
            };
        case Types.EDIT_INCOME:
            return {
                ...state,
                incomes: editincome(state.incomes, action.payload.oldIncome, action.payload.editedIncome)
            };
        case Types.DELETE_INC:
            return {
                ...state,
                incomes: deletePlan(state.incomes, action.payload)
            };
        default:
            return state
    }
};

export default incomesReducer;