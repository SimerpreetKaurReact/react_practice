import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [list, setList] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const fetchMoviesHandler = useCallback(async () => {
    setLoading(true);
    // const response = await fetch('https://swapi.dev/api/films/');
    // const response = await fetch(
    //   "https://console.firebase.google.com/u/0/project/react-project-61e92/database/react-project-61e92-default-rtdb/data/~2F/movies.json"
    // );
    fetch("https://react-project-61e92-default-rtdb.firebaseio.com/movies.json")
      .then((res) => res.json())
      .then((response) => {
        const loadedMovies = [];
        for (const key in response) {
          loadedMovies.push({
            id: key,
            title: response[key].title,
            openingText: response[key].openingText,
          });
        }
        setList(loadedMovies);
        // setList(
        //   response.results.map((ele) => ({
        //     id: ele.episode_id,
        //     title: ele.title,
        //     openingText: ele.opening_crawl,
        //     releaseDate: ele.release_date,
        //   }))
        // );
        setCurrentPage(1);
        setPages(response.count);
        console.log(response.results);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
    //in try catch case use respose.ok to throw error
    //use callback is mostly useed when you dont want a function to get unneccessary created each time
    //on every render ans
  }, []);
  useEffect(() => {
    fetchMoviesHandler();
  }, []);
  //fetch data as soon as the page loads, for that we need use effect
  const getPrevious = () => {
    setLoading(true);

    fetch(`https://swapi.dev/api/films/${currentPage - 1}`)
      .then((res) => res.json())
      .then((response) => {
        setList(response.results);
        setCurrentPage(currentPage - 1);
        console.log(response.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);

        setError(true);
      });
  };
  const getNext = () => {
    setLoading(true);

    fetch(`https://swapi.dev/api/films/${currentPage + 1}`)
      .then((res) => res.json())
      .then((response) => {
        setList(response.results);
        setCurrentPage(currentPage + 1);
        console.log(response.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  async function addMovieHandler(movie) {
    console.log(movie);
    const response = await fetch(
      "https://react-project-61e92-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        {loading && <p>Loading...</p>}
        {!loading && list.length === 0 && !error && <p>Found no movies</p>}
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <button disabled={currentPage === pages} onClick={getNext}>
          Next
        </button>
        <button disabled={currentPage === 1} onClick={getPrevious}>
          Previous
        </button>
        <MoviesList movies={list} />
      </section>
    </React.Fragment>
  );
}

export default App;
