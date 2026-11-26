import React, { useState } from "react";
import { useEffect } from "react";
const Api = () => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json)
  //     .then((data) => console.log(data))
  //     .then((error) => console.log(error));
  //  ط2
  // const getData = async () => {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // getData();
  const [Fetchd, setFetchd] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setFetchd(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log(Fetchd);
  return (
    <>
      <ul>
        {Fetchd.map((todo) => {
          <li key={todo.id}>
            {todo.title}
            {"-"}
            {todo.completed ? "completed" : "Not Completed"}
          </li>;
        })}
      </ul>
    </>
  );
};

export default Api;
