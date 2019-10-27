import {Types} from "../actions/types";
// import {editIncome} from "../utils/editIncome";

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
        default:
            return state
    }
};

export default expensesReducer;