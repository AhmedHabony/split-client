import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import incomesReducer from "./incomesReducer";
import expensesReducer from "./expensesReducer";



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['incomes', 'expenses']
};

const reducerRoot = combineReducers(
    {
        incomes: incomesReducer,
        expenses: expensesReducer
    }
);

export const persistedReducer  = persistReducer (persistConfig, reducerRoot);