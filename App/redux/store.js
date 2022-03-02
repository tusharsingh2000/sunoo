import {createStore, combineReducers, applyMiddleware} from 'redux';
import {authReducer, playerReducer} from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  playerReducer: playerReducer,
  authReducer: authReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
