import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";
import counterSlice from "./counterSlice"; // Import the counterSlice

const store = configureStore({
  reducer: {
    todos: todosSlice,
    counter: counterSlice, // Add the counterSlice
  },
});

export default store;
