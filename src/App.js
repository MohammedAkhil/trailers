import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import api from "./api";

function App() {
  const [movies, updateMovies] = useState({});

  useEffect(() => {
    (async function() {
      const moviesData = await fetchData();
      updateMovies(moviesData);
    })();
  }, []);

  async function fetchData() {
    try {
      const response = await api.movies().getFetch();
      if (response.status === 200) {
        return response.data[1];
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  return (
    <div className="App">
      {Object.keys(movies).length > 0 ? <MovieList movies={movies} /> : null}
    </div>
  );
}

export default App;
