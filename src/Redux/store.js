import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './Reducers/userReducer';

const rootReducer = combineReducers({
    userReducer
});

export default createStore(rootReducer, applyMiddleware(promise));