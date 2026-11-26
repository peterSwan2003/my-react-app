import { useReducer } from "react";
const reducer = (state, action) => {
  if (action === "increment") {
    return state + 1;
  }
  if (action === "decrement") {
    return state - 1;
  }
  if (action === "reset") {
    return 0;
  }
};
const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button type="button" onClick={() => dispatch("increment")}>
        increment
      </button>
      <button type="button" onClick={() => dispatch("decrement")}>
        decrement
      </button>
      <button type="button" onClick={() => dispatch("reset")}>
        reset
      </button>
    </div>
  );
};

export default Reducer;
