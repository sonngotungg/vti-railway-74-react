import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null)

  useEffect(() => inputRef.current.focus(), [])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Add</button>
      <button onClick={() => setCount(count-1)}>Subtract</button>
      <div>
        <input ref={inputRef} type='number' defaultValue={0} />
        <button onClick={() => setCount(count+parseInt(inputRef.current.value))}>Add N</button>
      </div>
    </div>
  );
}
