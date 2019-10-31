import {Types} from "../actions/types";
import {editincome} from "../utils/editIncome";
import {deletePlan} from "../utils/deletePlan";

const INITIAL_STATE = {
    expenses: []
};

const expensesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.ADD_NEW_EXPENSES:
            return {
                ...state,
                expenses: [...state.expenses, {...action.payload}]
            };

        case Types.EDIT_EXPENSES:
            return {
                ...state,
                expenses: editincome(state.expenses, action.payload.oldExpense, action.payload.editedExpense)
            };
        case Types.DELETE_EXP:
            return {
                ...state,
                expenses: deletePlan(state.expenses, action.payload)
            }

        default:
            return state
    }
};

export default expensesReducer;