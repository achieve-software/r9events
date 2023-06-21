import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div className="container text-center mt-4">
        <h2 className="text-danger">Use State Counter</h2>
        <h1 className="display-4">Count : {count}</h1>
        <button onClick={increment} className="btn btn-success">
          INC
        </button>
        <button onClick={reset} className="btn btn-danger">CLR</button>
        <button onClick={decrement} className="btn btn-warning">
          DEC
        </button>
      </div>
    </div>
  );
};
export default UseState;
