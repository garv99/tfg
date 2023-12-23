import { createStore, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import teamReducer from './reducers/teamReducer';

// Define your persistConfig
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['teamReducer', 'reducerToBlacklist2'],
};

// Combine your reducers
const rootReducer: any = combineReducers({
    teamReducer: teamReducer,
});

// Wrap the root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store and persistor
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
