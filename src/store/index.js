import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        
    ],
    blacklist: [
        'auth',
    ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const logger = createLogger();
let middleware = [];
middleware = [...middleware, thunk, logger];

const store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middleware))
);
const getStore = () => {
    return store;
}


let persistor = persistStore(store);
export { store, persistor, getStore };