import { useReducer, useRef } from "react";
import "./styles.css";

const initialState = {
  count: 0
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD': return {
      ...state,
      count: state.count + 1
    }
    case 'ADD_NUMBER': return {
      ...state,
      count: state.count + action.payload
    }
    case 'SUBTRACT': return {
      ...state,
      count: state.count - 1
    }
    default: state
  }
}

export default function App() {
  const [countState, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null)
  return (
    <div className="App">
      <h1>{countState.count}</h1>
      <button onClick={() => dispatch({type: 'ADD'})}>Add</button>
      <button onClick={() => dispatch({type: 'SUBTRACT'})}>Subtract</button>
      <div>
        <input ref={inputRef} type='number' defaultValue={0} />
        <button onClick={() => dispatch({type: 'ADD_NUMBER', payload: parseInt(inputRef.current.value)})}>Add N</button>
      </div>
    </div>
  );
}
