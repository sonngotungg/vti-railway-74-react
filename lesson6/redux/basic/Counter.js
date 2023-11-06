// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    // dispatch({ type: 'INCREMENT'});
    // dispatch({ type: 'INCREMENT', payload: 10 });
    dispatch({ type: 'INCREMENT', payload: 10 });
  };

  const decrement = (number) => {
    dispatch({ type: 'DECREMENT', payload: number });
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Deposit $10</button>
      <button onClick={() => decrement(10)}>Withdraw $10</button>
    </div>
  );
};

export default Counter;
