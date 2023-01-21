import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import listTodoReducer from '../app/reducer'

const rootReducer = combineReducers({listTodoReducer});
    
const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);

    

