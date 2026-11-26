import React, { useMemo, useState } from "react";

const Optimistic2 = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState([1, 2, 3, 4, 5]);

  const sum = useMemo(() => {
    console.log("calcalating sum ...");
    return number.reduce((acc, curr) => acc + curr, 0);
  }, [number]);
  return (
    <div>
      <h1>Hello</h1>
      <p>sum of number {sum}</p>
      <button onClick={() => setCount(count + 1)}>Increment({count})</button>
      <button onClick={() => setNumber([...number, number.length + 1])}>
        add number to array
      </button>
    </div>
  );
};

export default Optimistic2;
