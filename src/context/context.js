import React, { useState, useEffect, useContext } from "react";

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
export const noImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637";

export const MoviesContext = React.createContext();

export const MoviesProvier = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("batman");
  const [error, setError] = useState({
    show: false,
    msg: "",
  });
  const handleFetch = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setLoading(false);
        setMovies(data.Search);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      handleFetch(`${API_ENDPOINT}&s=${query}`);
    } else {
      setLoading(false);
    }
  }, [query]);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        loading,
        setLoading,
        handleFetch,
        query,
        setQuery,
      }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(MoviesContext);
};
