import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prveCount) => prveCount + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default Counter;
