import React, { createContext, useContext, useState } from 'react';

// Create a context
export const Context = createContext();

export function ContextProvider({ children }) {
  const [state, setState] = useState('Initial State');

  return (
    <Context.Provider value={{ state, setState }}>
      {children}
    </Context.Provider>
  );
}