import { findByTitle, getByTitle } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useGlobalContext } from '../context/context';

export const Movies = () => {
    const { movies, setLoading, loading } = useGlobalContext();

    return (
        <Wrapper>
            {movies.map((movie) => {
                const { Title: title, Year: year, imdbID: id, Poster: img } = movie;
                return (
                    <Link className='movie-card' to={`/movies/${id}`} key={id}>
                        <img src={img} alt={title} />
                        <div className='movie-info'>
                            <h4>{title}</h4>
                            <p>{year}</p>
                        </div>
                    </Link>
                );
            })}
        </Wrapper>
    );
}

export const Wrapper = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    max-width: 90vw;
    flex-wrap: wrap;
    margin-left: 5rem;
    
    .movie-card {
        position: relative;
        width: 300px;
        margin-bottom: 4rem;
        overflow: hidden;
        border-radius: 0;
    }
    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        display: block;
    }
    .movie-info {
        width: 100%;
        position: absolute;
        left: 0;
        bottom:0;
        padding: 0.6rem ;
        z-index: 100;
        color: white;
        background-color: rgba(0, 0, 0, 0.6);
        transform: translateY(100%);
        transition: 0.3s ease-in;
    }

    .movie-card:hover .movie-info {
        transform: translateY(0);
    }
`