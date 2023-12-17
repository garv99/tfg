// store.ts

import { createStore, combineReducers } from 'redux';
import teamReducer from './reducers/teamReducer';

const rootReducer = combineReducers({
    teamReducer: teamReducer,
});

const store = createStore(rootReducer);

export default store;
