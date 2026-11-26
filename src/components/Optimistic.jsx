import React, { useState } from "react";
import RenderName from "./RenderName";

const Optimistic = () => {
  const [name, setName] = useState("");
  const [addres, setAddres] = useState("");
  return (
    <div>
      <h1>Hello</h1>
      <input
        type="text"
        value={name}
        placeholder="enter youy name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={addres}
        placeholder="enter youy addres"
        onChange={(e) => setAddres(e.target.value)}
      />
      <RenderName name={name} />
      <h2>{addres}</h2>
    </div>
  );
};

export default Optimistic;
