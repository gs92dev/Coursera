import { useState, useRef } from "react";
import Transitioning from "./Transitioning";
import MyComponent from "./MyComponent";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [input, setInput] = useState(" ");

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    if (result === 0) {
      setResult((result) => (result = Number(inputRef.current.value)));
    } else {
      setResult((result) => result * Number(inputRef.current.value));
    }
  }

  function divide(e) {
    e.preventDefault();
    if (result === 0) {
      setResult((result) => (result = Number(inputRef.current.value)));
    } else {
      setResult((result) => result / Number(inputRef.current.value));
      setInput(0);
    }
  }

  function resetInput(e) {
    e.preventDefault();
    setInput(0);
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
          value={input} // Set the input value to the state
          onChange={(e) => setInput(Number(e.target.value))} // Update the input state
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <div>
          <button className="redBtn" onClick={resetInput}>
            Reset input
          </button>
          <button className="redBtn" onClick={resetResult}>
            Reset result
          </button>
        </div>
      </form>
      <Transitioning />
      <MyComponent />
      <p>Hey</p>
    </div>
  );
}

export default App;
