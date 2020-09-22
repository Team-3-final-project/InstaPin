import { createStore, applyMiddleware, combineReducers } from 'redux';
import { profileReducers } from './reducers';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  profileReducers
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
