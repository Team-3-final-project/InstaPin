import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer'
import { profileReducers } from './reducers';

const reducers = combineReducers({
  profileReducers,
  userReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
