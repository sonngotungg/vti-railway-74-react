import { useContext } from "react";
import "./styles.css";
import { Context } from "./Provider";

const Child1 = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      <h1>Child 1</h1>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};

export default function App() {
  const { state, dispatch } = useContext(Context);
  console.log({ state });
  return (
    <div className="App">
      <Child1 />
      <h1>{JSON.stringify(state)}</h1>
      <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
      <button onClick={() => dispatch({ type: "SUBTRACT" })}>SUBTRACT</button>
    </div>
  );
}
