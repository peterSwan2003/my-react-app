import React, { useState } from "react";
import TaskProps from "./TaskProps";

const taskstate = () => {
  const [count, setCount] = useState(0);
  const sumIndex = () => {
    setCount(count + 1);
  };
  const delIndex = () => {
    setCount(count - 1);
  };
  const resetIndex = () => {
    setCount(0);
  };
  return (
    <>
      <TaskProps
        count={count}
        sumIndex={sumIndex}
        delIndex={delIndex}
        reset={resetIndex}
      />
    </>
  );
};

export default taskstate;
