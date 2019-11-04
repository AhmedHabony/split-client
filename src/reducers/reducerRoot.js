import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import incomesReducer from "./incomesReducer";
import expensesReducer from "./expensesReducer";
import planReducer from "./planReducer";
import noteReducer from "./noteReducer";
import signInReducer from './signInReducer'
import notePortalsReducer from "./notePortalsReducer";



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['incomes', 'expenses', 'plan', 'note']
};

const reducerRoot = combineReducers(
    {
        incomes: incomesReducer,
        expenses: expensesReducer,
        plan: planReducer,
        note: noteReducer,
        signIn: signInReducer,
        notePortals: notePortalsReducer
    }
);

export const persistedReducer  = persistReducer (persistConfig, reducerRoot);