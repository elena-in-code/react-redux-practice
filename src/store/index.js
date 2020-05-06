import { createStore, combineReducers } from 'redux';
import reducerTeamManager from './reducer';

const reducers = combineReducers({
  reducerTeamManager,
});

const store = createStore(reducers);

export default store;
