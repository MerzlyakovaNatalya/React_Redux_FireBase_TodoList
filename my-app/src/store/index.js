import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "./todos/reducer";

const rootReducer = combineReducers({
    todos: todosReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()