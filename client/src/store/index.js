import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import { action as viewAction, reducer as viewReducer } from './view';
import { action as navigationAction, reducer as navigationReducer } from './navigation';
import { action as userAction, reducer as userReducer, middleware as userMiddleware } from './user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const action = {
    view: viewAction,
    navigation: navigationAction,
    user: userAction
};

const reducers = combineReducers({
    view: viewReducer,
    navigation: navigationReducer,
    users: userReducer
});

export default createStore(reducers, composeEnhancers(
	applyMiddleware(
		...userMiddleware
	)
));