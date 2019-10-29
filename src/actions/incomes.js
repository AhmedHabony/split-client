import {Types} from "./types";



export const addNewIncome = income => (
    {
        type: Types.ADD_NEW_INCOME,
        payload: income
    }
);
export const editincome = (oldIncome, editedIncome) => (
    {
        type: Types.EDIT_INCOME,
        payload: {oldIncome, editedIncome}
    }
);
