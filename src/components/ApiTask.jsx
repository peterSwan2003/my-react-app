import React, { useState } from "react";
import { useEffect } from "react";
import PaginationApi from "./PaginationApi";
const ApiTask = () => {
  const [TaskApi, setTaskApi] = useState([]);
  const [currentPage, SetCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(" ");
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 6000 + 500),
        );
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?page=${currentPage}`,
        );
        const data = await res.json();
        if (res.status === 200) {
          setTaskApi(data.results);
          setTotalPage(data.info.pages);
          console.log(data);
          setLoading(false);
        } else {
          setError("something went wrong");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getData();
  }, [currentPage]);
  console.log(TaskApi);
  const handelSearch = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && TaskApi && (
        <form onSubmit={handelSearch}>
          <label htmlFor="searsch">Search</label>
          <input
            type="search"
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul>
            {TaskApi.filter((character) =>
              character.name.toLowerCase().includes(search.toLowerCase()),
            ).map((character) => {
              return (
                <li key={character.id}>
                  <img src={character.image} alt={character.name} width="200" />
                  <div>
                    <h3>{character.name}</h3>
                    <h4>
                      {character.status}-{character.species}
                    </h4>
                    <p>
                      <span>last known location: </span>
                      <br /> {character.location.name}
                    </p>
                    <p>
                      <span>the gender: </span>
                      <br /> {character.gender}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </form>
      )}
      <PaginationApi
        currentPage={currentPage}
        totalPage={totalPage}
        onPageChange={SetCurrentPage}
      />
    </>
  );
};
export default ApiTask;
