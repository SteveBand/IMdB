import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';


export const SingleMovie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_ENDPOINT = `http://img.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

    const handleFetch = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json();
            if (data.Response === 'True') {
                setLoading(false);
                setMovie(data.Response)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleFetch(`${API_ENDPOINT}&i=${id}`)
        console.log(movie)
    }, [id])

    const { Title, Year, Rated, Genre, Language, Poster, Plot} = movie;
    return (
        <React.StrictMode>
            <Wrapper>
                <img src={Poster} alt={Title} />
                <div className='movie-info'>
                    <h4>{Title}</h4>
                    <p>{Plot}</p>
                    <h4>{Year}</h4>
                </div>
            </Wrapper>
        </React.StrictMode>
    );
}

const Wrapper = styled.section`
    min-height: 100vh;
    display: flex;
    
    img{
        height: 500px;
        width: 100%
    }
    
`