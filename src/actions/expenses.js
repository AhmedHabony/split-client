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

export const deleteExpense = incExp =>({
    type: Types.DELETE_EXP,
    payload: incExp
});