import React, { useReducer, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const initalstate = {
  Loading: true,
  error: "",
  views: [], // تأكدنا إن اسمها views زي ما هي في الـ reducer
  search: "",
  currentPage: 1,
  itemsPerPage: 4,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch-loading":
      return {
        ...state,
        Loading: true,
        error: "",
      };
    case "fetch-succes-request":
      return {
        ...state,
        Loading: false,
        error: "",
        views: action.loadlist,
      };
    case "fetch-wrong":
      return {
        ...state,
        Loading: false,
        error: action.loadlist,
        views: [],
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
        currentPage: 1,
      };
    case "Set-Page":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

const TaskReducer = () => {
  const [state, dispatch] = useReducer(reducer, initalstate);

  useEffect(() => {
    const getdata = async () => {
      dispatch({ type: "fetch-loading" });
      try {
        const res = await axios.get(
          "https://rickandmortyapi.com/api/character",
        );
        if (res.status === 200) {
          dispatch({
            type: "fetch-succes-request",
            loadlist: res.data.results,
          });
        } else {
          dispatch({
            type: "fetch-wrong",
            loadlist: "Request failed",
          });
        }
      } catch (error) {
        dispatch({
          type: "fetch-wrong",
          loadlist: error.message,
        });
      }
    };
    getdata();
  }, []);

  const handelSearch = (e) => {
    e.preventDefault();
  };
  const filteredViews = state.views.filter((item) =>
    item.name.toLowerCase().includes(state.search.toLowerCase()),
  );
  const totalPages = Math.ceil(filteredViews.length / state.itemsPerPage);
  const indexOfFistItem = (state.currentPage - 1) * state.itemsPerPage;
  const indexOfLastItem = state.currentPage * state.itemsPerPage;
  const currentItems = filteredViews.slice(indexOfFistItem, indexOfLastItem);
  return (
    <>
      {state.Loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}

      <form onSubmit={handelSearch}>
        <label htmlFor="search">Search</label>
        <input
          type="search"
          name="search"
          id="search"
          value={state.search}
          onChange={(e) =>
            dispatch({ type: "SET_SEARCH", payload: e.target.value })
          }
        />
      </form>

      <ul>
        {currentItems.map((view) => {
          return (
            <li key={view.id} style={{ marginBottom: "20px" }}>
              <img src={view.image} alt={view.name} width="200" />
              <div>
                <h3>{view.name}</h3>
                <h4>
                  {view.status} - {view.species}
                </h4>
                <p>
                  <span>last known location: </span>
                  <br /> {view.location.name}
                </p>
                <p>
                  <span>the gender: </span>
                  <br /> {view.gender}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <button
          style={{ color: "white" }}
          disabled={state.currentPage === 1}
          onClick={() =>
            dispatch({ type: "Set-Page", payload: state.currentPage - 1 })
          }
        >
          Previous
        </button>

        <span>
          Page {state.currentPage} of {totalPages || 1}
        </span>

        <button
          style={{ color: "white" }}
          disabled={state.currentPage === totalPages || totalPages === 0}
          onClick={() =>
            dispatch({ type: "Set-Page", payload: state.currentPage + 1 })
          }
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TaskReducer;
