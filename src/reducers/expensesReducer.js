import {Types} from "../actions/types";
import {editincome} from "../utils/editIncome";

const INITIAL_STATE = {
    expenses: []
};

const expensesReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case Types.ADD_NEW_EXPENSES:
            return{
                ...state,
                expenses: [...state.expenses, {...action.payload}]
            };

        case Types.EDIT_EXPENSES:
        return{
            ...state,
            expenses: editincome(state.expenses, action.oldExpense, action.editedExpense )
        };


        default:
            return state
    }
};

export default expensesReducer;