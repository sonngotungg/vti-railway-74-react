// todosSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, text: "Learn Redux", completed: false },
    { id: 2, text: "Create a React app", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newId = Math.floor(Math.random() * 1000);
      state.push({ id: newId, text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
