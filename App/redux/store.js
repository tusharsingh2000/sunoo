import {createStore, combineReducers, applyMiddleware} from 'redux';
import {
  authReducer,
  homeReducer,
  playerReducer,
  songsReducer,
} from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  playerReducer: playerReducer,
  authReducer: authReducer,
  homeReducer: homeReducer,
  songsReducer: songsReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
