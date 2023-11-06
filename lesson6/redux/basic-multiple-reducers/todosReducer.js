// todosReducer.js
const initialTodos = [
    { id: 1, text: "Learn Redux", completed: false },
    { id: 2, text: "Create a React app", completed: false }
  ];
  
  const todosReducer = (state = initialTodos, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
      case "TOGGLE_TODO":
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
      default:
        return state;
    }
  };
  
  export default todosReducer;
  