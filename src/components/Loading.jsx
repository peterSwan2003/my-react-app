import React, { useState } from "react";
import { useEffect } from "react";
const Loading = () => {
  const [fetchd, setFetche] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const getrData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        if (res.status === 200) {
          setFetche(data);
          setLoading(false);
        } else {
          setError("something went wrong");
        }
      } catch {
        setLoading(false);
        setError("something went wrong");
        console.log(error);
      }
    };
    getrData();
  }, []);
  console.log(fetchd);
  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && fetchd && (
        <ul>
          {fetchd.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.id} - {todo.title}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Loading;
