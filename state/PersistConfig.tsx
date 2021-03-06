import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import AsyncStorage from '@react-native-community/async-storage';

import { rootReducer } from './RootReducer' // Root reducer

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage: AsyncStorage, // define which storage to use
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer

const store = createStore(
    persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
    applyMiddleware() // add any middlewares here
)

const  persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export {store, persistor}