import {persistStore} from 'redux-persist'
import {applyMiddleware, createStore} from "redux";
import {logger} from 'redux-logger'
import {persistedReducer} from "./reducerRoot";



const middlewares = [logger]

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store)

