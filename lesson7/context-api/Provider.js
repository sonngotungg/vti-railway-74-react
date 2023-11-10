import React, { useState } from "react";

export const Context = React.createContext();

const Provider = ({ children }) => {
  const [state, setState] = useState(0);
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

export default Provider;
