import React from "react";

const TaskProps = (props) => {
  return (
    <>
      <div className="parent">
        <p>العداد : {props.count}</p>
        <button onClick={props.sumIndex}>زيادة +</button>
        <button onClick={props.delIndex}>إنقاص _</button>
        <button onClick={props.resetIndex}>تصفير</button>
      </div>
    </>
  );
};

export default TaskProps;
