import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import incomesReducer from "./incomesReducer";
import expensesReducer from "./expensesReducer";
import planReducer from "./planReducer";



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['incomes', 'expenses', 'plan']
};

const reducerRoot = combineReducers(
    {
        incomes: incomesReducer,
        expenses: expensesReducer,
        plan: planReducer,
    }
);

export const persistedReducer  = persistReducer (persistConfig, reducerRoot);