import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
export const Search = () => {
  const { query, setQuery, handleFetch } = useGlobalContext();

  return (
    <>
      <SearchForm onSubmit={(e) => e.preventDefault()}>
        <h1 className="title">Search Movies</h1>
        <input
          type="text"
          placeholder="search a movie"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </SearchForm>
    </>
  );
};

const SearchForm = styled.form`
  width: 600px;
  margin: 0 auto;
  margin-top: 5rem;
  margin-left: 24.5rem;
  input {
    position: relative;
    top: 0;
    padding: 1rem;
    width: 500px;
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    outline: none;
    box-shadow: 0px 5px 0px 0px rgba(76, 148, 255, 0.99);
    margin-bottom: 5rem;
    color: #697c8e;
  }

  .title {
    letter-spacing: 3px;
    color: #112a42;
    font-size: 300%;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 12rem;
    width: 700px;
    height: 380px;

    .title {
      font-size: 5rem;
      margin-left: -1rem;
    }

    input {
      width: 550px;
      font-size: 3.5rem;
      box-shadow: 0px 8px 0px 0px rgba(76, 148, 255, 0.99);
    }
  }

  @media screen and (max-width: 900px){
    margin-left: 11.5rem;

    .title {
      font-size: 4rem;
      letter-spacing: 4px;
    }

    input{
      width: 500px;
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 800px){
    margin-left: 8rem;

    .title {
      font-size: 4rem;
      letter-spacing: 6px;
    }

    input {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    margin-left: 5rem;
    margin-top: 2.5rem;
    width: 240px;
    margin-bottom: -1rem;

    .title {
      letter-spacing: 1px;
      font-size: 180%;
      margin-left: 0.5rem;
    }

    input {
      margin-left: -2rem;
      width: 250px;
      font-size: 1.2rem;
      background-color: white;
      box-shadow: 0px 3px 0px 0px rgba(76, 148, 255, 0.7);
    }
  }

  @media screen and (min-width: 410px) and (max-width: 500px) {
    width: max-content;
    margin-left: 6rem;

    input {
      margin-left: -3rem;
      width: 300px;
    }

    .title {
      font-size: 200%;
      letter-spacing: 2.5px;
    }
  }

  @media screen and (max-width: 300px) {
    margin-left: 2.2rem;
    margin-top: 2.5rem;
    width: max-content;
    height: 150px;
    .title {
      letter-spacing: 1px;
      font-size: 180%;
    }

    input {
      margin-left: -0.65rem;
      width: 200px;
      box-shadow: none;
      background-color: white;
      outline-color: orange;
      box-shadow: 0px 3px 0px 0px rgba(76, 148, 255, 0.7);
    }
  }
`;
