import { useSelector, useDispatch } from "react-redux";
import {useRef} from 'react'

const TodosComponent = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const inputRef = useRef(null);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     inputRef.current
//   }
  // Action creators
  const addTodo = (text) => {
    const newId = Math.floor(Math.random() * 1000); // Generate a random ID
    dispatch({ type: "ADD_TODO", id: newId, text });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input ref={inputRef} type="text" />
      <button onClick={() => addTodo(inputRef.current.value)}>Add Todo</button>
    </div>
  );
};

export default TodosComponent