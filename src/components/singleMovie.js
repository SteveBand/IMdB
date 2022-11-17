import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { API_ENDPOINT } from "../context/context";

export const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFetch = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setLoading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  if (loading) {
    return <Loading></Loading>;
  }

  const { Title, Year, Rated, Genre, Language, Poster, Plot } = movie;
  return (
    <React.StrictMode>
      <Container>
        <Wrapper>
          <img src={Poster} alt={Title} />
          <div className="movie-info">
            <h4 className="title">{Title}</h4>
            <p className="plot">{Plot === "N/A" ? null : Plot}</p>
            <h4 className="year">{Year === "N/A" ? null : Year}</h4>
            <Link to="/" className="btn">
              back home
            </Link>
          </div>
        </Wrapper>
      </Container>
    </React.StrictMode>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  margin-top: 7rem;

  img {
    height: 520px;
    width: 320px;
    border-radius: 2%;
  }
  .movie-info {
    margin-left: 4rem;
    margin-top: -2rem;
  }

  .title {
    font-size: 2rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }

  .year {
    font-size: 1.3rem;
  }

  .plot {
    width: 400px;
    font-size: 20px;
    margin: 0;
  }

  //p {
  // margin: 0 10px;
  //}

  .btn {
    text-decoration: none;
    font-size: 20px;
    background-color: #49a6e9;
    color: white;
    padding: 5px 30px;
    border-radius: 8%;
  }

  @media screen and (max-width: 1360px){
    margin-top: 0;
    margin-left: 0;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    img {
      width: 50%;
      height: 55%;
    }
    .movie-info {
      margin-left: 1rem;
      width: 40%;
      display: flex;
      flex-direction: column;
      align-content: center;
      overflow-wrap: break-word;
    }
    .plot{
      width: 100%;
      font-size: 35px;
      letter-spacing: 1px;
    }
    .title{
      width: 100%;
      font-size: 40px;
      letter-spacing: 2px;
    }
    .year {
      font-size: 32px;
      letter-spacing: 2px;
    }
    .btn {
      width: max-content;
      padding: 10px 30px;
      font-size: 220%;
    }
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 95%;
    margin-top: 2rem;


    img {
      width: 90%;
      height: 70%;
    }
    .title {
      font-size: 28px;
      letter-spacing: 1px;
      margin-bottom: 0.5rem;
      width: 100%;
      text-align: center;
      text-decoration: underline;
    }
    .year {
      display: none;
    }

    .movie-info {
      margin-left: 0;
      margin-top: 0;
      display: flex;
      align-content: center;
      justify-content: center;
      flex-direction: column;
    }

    .plot {
      text-align: center;
      width: 100%;
      font-size: 26px;
      margin-bottom: 2rem;
    }
    .btn {
      align-self: center;
      padding: 10px 30px;
      margin-bottom: 5rem;
      width: max-content;
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
