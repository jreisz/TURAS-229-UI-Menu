import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import appSettings from './AppSettings/reducer';
import userReducer from './User/reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    //whitelist: ['userReducer'] // which reducer want to store
};


const user = persistReducer(persistConfig, userReducer);

const store = createStore(
    combineReducers({
        user, appSettings
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);
export { persistor, store };