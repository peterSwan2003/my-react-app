import React, { useReducer } from "react";
import Reducer from "./Reducer";
// const reducer = (state, action) => {
//   if (action === "increment") {
//     return state + 1;
//   }
//   if (action === "decrement") {
//     return state - 1;
//   }
//   if (action === "reset") {
// return initalCountOne || initalCountTwo;
//   }
// };
const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + action.value;
  }
  if (action.type === "decrement") {
    return state - action.value;
  }
  if (action.type === "reset") {
    return action.value;
  }
};
const initalCountOne = 0;
const initalCountTwo = 2;
const Reducer2 = () => {
  const [countOne, dispatch] = useReducer(reducer, initalCountOne);
  const [countTwo, dispatchTwo] = useReducer(reducer, initalCountTwo);
  return (
    <div>
      <h1>Count One: {countOne}</h1>
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", value: 1 })}
      >
        increment
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", value: 1 })}
      >
        decrement
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "reset", value: 0 })}
      >
        reset
      </button>

      <h1>Count two: {countTwo}</h1>
      <button
        type="button"
        onClick={() => dispatchTwo({ type: "increment", value: 2 })}
      >
        increment
      </button>
      <button
        type="button"
        onClick={() => dispatchTwo({ type: "decrement", value: 2 })}
      >
        decrement
      </button>
      <button
        type="button"
        onClick={() => dispatchTwo({ type: "reset", value: 2 })}
      >
        reset
      </button>
    </div>
  );
};

export default Reducer2;
