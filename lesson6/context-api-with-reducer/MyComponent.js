import React, { useContext } from 'react';
import { Context } from './ContextProvider';

function MyComponent() {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      <p>My State: {state}</p>
      <button onClick={() => dispatch({ type: 'ADD', payload: 5 })}>
        Change State
      </button>
    </div>
  );
}

export default MyComponent