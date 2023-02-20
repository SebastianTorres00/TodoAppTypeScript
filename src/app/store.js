import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import listTodoReducer from '../app/reducer';

const rootReducer = combineReducers({listTodoReducer});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
