import { findByTitle, getByTitle } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext, noImg } from "../context/context";

export const Movies = () => {
  const { movies, setLoading, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {movies.map((movie) => {
        const { Title: title, Year: year, imdbID: id, Poster: img } = movie;
        return (
          <Link className="movie-card" to={`/movies/${id}`} key={id}>
            <img src={img === "N/A" ? noImg : img} alt={title} />
            <div className="movie-info">
              <h4>{title}</h4>
              <p>{year}</p>
            </div>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  max-width: 60vw;
  flex-wrap: wrap;
  margin-left: 22rem;

  .movie-card {
    position: relative;
    width: 300px;
    margin-bottom: 4rem;
    overflow: hidden;
    border-radius: 0;
    -webkit-box-shadow: 0px 0px 30px 7px rgba(0, 0, 0, 0.62);
    box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 0.7);
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
    bottom: 0;
    padding: 0.6rem;
    z-index: 100;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    transform: translateY(100%);
    transition: 0.3s ease-in;
  }

  .movie-card:hover .movie-info {
    transform: translateY(0);
  }

  @media screen and (max-width: 1000px) {
    margin-left: 11.5rem;
    .movie-card {
      width: 600px;
    }

    img {
      width: 600px;
      height: 850px;
    }
  }

  @media screen and (max-width: 900px) {
    margin-left: 11rem;
    
    .movie-card {
      width: 700px;
      height: 800px;
    }

    img {
      height: 100%;
      width: 100%;
    }

    .movie-info {
      transform: translateY(0);
      height: auto;
      h4 , p {
        font-size: 2.7rem;
        width: 90%;
        letter-spacing: 1px;
      }
    }
  }

  @media screen and (max-width: 800px){
    margin-left: 10rem;

    .movie-card {
      width: 500px;
      height: 600px;
    }

    img {
      width: 100%;
      height: 100%;
    }

    .movie-info {
      transform: translateY(0);

      font-size: 2.2rem;
      letter-spacing: 1px;
      width: 100%;
    }
  }

  @media screen and (min-width: 410px) and (max-width: 500px) {
    max-width: 75vw;
    margin: 0 auto;

    .movie-card {
      width: 270px;
      height: 360px;
      border-radius: 2%;
    }

    img {
      width: 100%;
      height: 100%;
    }

    .movie-info {
      transform: translateY(0);

      h4,
      p {
        font-size: 112%;
        letter-spacing: 1px;
        width: 90%;
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 410px) {
    max-width: 60vw;
    margin: 0 auto;

    .movie-card {
      width: 200px;
      margin-bottom: 2rem;
    }

    img {
      width: 200px;
      height: 320px;
    }

    .movie-info {
      transform: translateY(0);
      h4,
      p {
        font-size: 112%;
        letter-spacing: 1px;
        width: 90%;
      }
    }
  }
  @media screen and (max-width: 300px) {
    margin-left: 0rem;
    max-width: 100%;
    .movie-card {
      width: 180px;
      height: 320px;
    }

    .movie-info {
      height: 60px;
      padding: 0 auto;
      transform: translateY(-20%);
    }

    .movie-info {
      transform: translateY(-0%);
      height: fit-content;
      h4,
      p {
        font-size: 112%;
        letter-spacing: 1px;
        width: 90%;
      }
    }
  }
`;

const Loading = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: #49a6e9;
  animation: spinner 0.6s linear infinite;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
