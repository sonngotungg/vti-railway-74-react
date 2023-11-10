import React, { useReducer } from "react";

export const Context = React.createContext();

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "SUBTRACT") {
    return {
      ...state,
      count: state.count - 1,
    };
  } else {
    return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
