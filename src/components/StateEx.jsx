import React, { useState } from "react";

const StateEx = () => {
  const [userName, setUserName] = useState(" ");
  const [Password, setPassword] = useState(" ");
  const handelSubmit = (e) => {
    e.preventDefault();

    if (userName === "" && Password === "") {
      alert("pleas fill inall fields");
    }
    console.log(userName);
    console.log(Password);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="userName">user name</label>
        <input
          type="text"
          name="username"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default StateEx;
