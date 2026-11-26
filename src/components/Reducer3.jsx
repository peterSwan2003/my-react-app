import React, { useEffect, useReducer } from "react";
import Loading from "./Loading";
import axios from "axios";
const initaleState = {
  Loading: true,
  error: "",
  post: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PENDING":
      return {
        Loading: true,
        error: "",
        posts: [],
      };
    case "FETCH_SCCES":
      return {
        Loading: false,
        error: "",
        posts: action.payload,
      };
    case "FETCH_ERROR":
      return {
        Loading: false,
        error: action.payload || "Something Went Wrong!",
        posts: [],
      };
    default:
      return state;
  }
};
const Reducer3 = () => {
  const [state, dispatch] = useReducer(reducer, initaleState);
  useEffect(() => {
    const getposts = async () => {
      dispatch({ type: "FETCH_PENDING" });
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        if (res.status === 200) {
          dispatch({
            type: "FETCH_SCCES",
            payload: res.data,
          });
        } else {
          dispatch({
            type: "FETCH_ERROR",
            payload: "Request failed",
          });
        }
      } catch (error) {
        dispatch({
          type: "FETCH_ERROR",
          payload: error.message,
        });
      }
    };
    getposts();
  }, []);
  return (
    <div>
      {state.Loading && <h2> loading...</h2>}
      {state.error && <h2>{state.error}</h2>}
      {state.posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default Reducer3;
