import React, { useState } from "react";
const State = () => {
  // const[state,setstate]=useState(0)
  // const[link,setlink]=useState(0)
  // examp 1
  const [count, setCount] = useState(0);
  //examp 2
  const [firstName, setFirstName] = useState("peter");
  const [lastName, setLastName] = useState("swan");
  // examp 3
  const [name, setName] = useState({
    firstName: "fadi",
    lastName: "basha",
  });
  // examp 4
  const [input, setInput] = useState(" ");
  return (
    <>
      {/* مثال 1 */}
      <p>conut : {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => setCount(count - 1)}>dell</button>
      <button onClick={() => setCount(0)}>reset</button>
      {/* مثال 2 */}
      <h2>نموذج الأسماء</h2>
      <p>الأسم الأول: {firstName} </p>
      <button onClick={() => setFirstName("بيتر")}>تغيير الأسم الأول</button>
      <p>الأسم الثاني: {lastName} </p>
      <button onClick={() => setLastName("صوان")}>تغيير الأسم الثاني</button>
      {/* مثال 3 */}
      <h1>
        {name.firstName}
        <br />
        <br />
        {name.lastName}
      </h1>
      <button
        type="button"
        onClick={() => setName({ firstName: "ali", lastName: "mohameed" })}
      >
        change user
      </button>
      {/* مثال 4 */}
      <input
        type="text"
        placeholder="enter your name: "
        onChange={(e) => setInput(e.target.value)}
      />
      <p>your name is {input}</p>
    </>
  );
};

export default State;
