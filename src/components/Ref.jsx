import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      console.log("interavl started");
    };
  }, []);
  return (
    <div>
      <p>{timer}</p>
      <button type="button" onClick={() => clearInterval(intervalRef.current)}>
        stop
      </button>
    </div>
  );
};

export default Ref;
