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
    <MovieSection>
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
    </MovieSection>
  );
};

const MovieSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.section`
  min-height: 100vh;
  max-width: 65vw;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .movie-card {
    position: relative;
    margin: 0 1rem;
    width: 30%;
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

  @media screen and (max-width: 1360px) {
    display: flex;
    justify-content: center;
    .movie-card {
      width: 100%;
      height: 10%;
    }

    img {
      height: 100%;
    }
    .movie-info {
      transform: translateY(0);

      h4,
      p {
        font-size: 300%;
        letter-spacing: 5px;
        width: 90%;
      }
    }
  }

  @media screen and (max-width: 992px) {
    display: flex;
    justify-content: center;
    .movie-card {
      width: 100%;
      height: 10%;
    }

    img {
      height: 100%;
    }
    .movie-info {
      transform: translateY(0);

      h4,
      p {
        font-size: 200%;
        letter-spacing: 1px;
        width: 90%;
      }
    }
  }

  @media screen and (max-width: 480px) {
    max-width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    .movie-card {
      width: 80%;
      height: 400px;
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
        font-size: 23px;
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
