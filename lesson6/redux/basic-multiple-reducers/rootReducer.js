// rootReducer.js
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer // Include the todosReducer
});

export default rootReducer;
