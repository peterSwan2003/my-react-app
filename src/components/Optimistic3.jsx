import React, { useCallback, useState } from "react";

const Optimistic3 = () => {
  const [age, setAge] = useState(23);
  const [salary, setSalary] = useState(8000);

  const incrementAge = useCallback(() => {
    setAge((prev) => prev + 1);
    console.log("incrementAge");
  }, []);
  const incrementSalary = useCallback(() => {
    setSalary((prev) => prev + 2000);
  }, []);
  return (
    <div>
      <h1>Hello</h1>
      <p>age: {age}</p>
      <p>salary: {salary}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={incrementSalary}>Increment Salary</button>
    </div>
  );
};

export default Optimistic3;
