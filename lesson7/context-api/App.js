import { Context } from "./Provider";
import "./styles.css";
import { useContext } from "react";

export const Child1 = () => {
  const { state, setState } = useContext(Context);

  return (
    <div>
      <p>Child 1</p>
      <p>{state}</p>
    </div>
  );
};

export default function App() {
  const { state, setState } = useContext(Context);

  return (
    <div className="App">
      <Child1 />
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>Add</button>
    </div>
  );
}
