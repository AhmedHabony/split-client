import {Types} from "./types";


export const addNewExpenses = expense => (
    {
        type: Types.ADD_NEW_EXPENSES,
        payload: expense
    }
);
export const editExpenses = (oldExpense, editedExpense) => (
    {
        type: Types.EDIT_EXPENSES,
        payload: {oldExpense, editedExpense}
    }
);
