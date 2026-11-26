import react, { useContext } from "react";
// import { UserNameContext } from "../App";

const Middel = () => {
  const userName = useContext(UserNameContext);
  return (
    <>
      {userName}
      {/* <UserNameContext.Consumer>
        {(userName2) => {
          return <h1>my name is {userName2}</h1>;
        }}
      </UserNameContext.Consumer> */}
    </>
  );
};

export default Middel;
