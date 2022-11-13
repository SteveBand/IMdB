import { queryByRole } from '@testing-library/react';
import React, { useState, useEffect, useContext } from 'react';


const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
export const MoviesContext = React.createContext();
export const MoviesProvier = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('spiderman')
    const [error, setError] = useState({
        show: false,
        msg: '',
    })
    const handleFetch = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            if (data.Response === 'True') {
                setLoading(false);
                setMovies(data.Search);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        handleFetch(`${API_ENDPOINT}&s=${query}`);
        console.log(API_ENDPOINT)
    }, [query])

    return (
        <MoviesContext.Provider value={{
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
