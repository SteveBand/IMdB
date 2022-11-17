import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
export const Search = () => {
  const { query, setQuery, handleFetch } = useGlobalContext();

  return (
    <>
      <Nav>
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
      </Nav>
    </>
  );
};

const Nav = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  place-self: center;
  margin-bottom: 15%;
`;

const SearchForm = styled.form`
  width: 600px;
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    position: relative;
    top: 0;
    padding: 1rem;
    width: 100%;
    border: none;
    background-color: transparent;
    font-size: 150%;
    outline: none;
    box-shadow: 0px 5px 0px 0px rgba(76, 148, 255, 0.99);
    color: #697c8e;
  }

  .title {
    letter-spacing: 3px;
    color: #112a42;
    font-size: 300%;
  }

  @media screen and (max-width: 1360px) {
    justify-content: center;
    margin-top: 2.5rem;
    width: 80%;
    height: 10rem;

    .title {
      letter-spacing: 5px;
      font-size: 330%;
    }

    input {
      width: 80%;
      font-size: 200%;
      background-color: white;
      box-shadow: 0px 3px 0px 0px rgba(76, 148, 255, 0.7);
    }
  }

  @media screen and (max-width: 992px) {
    justify-content: center;
    margin-top: 2.5rem;
    width: 80%;
    height: 10rem;

    .title {
      letter-spacing: 5px;
      font-size: 330%;
    }

    input {
      width: 80%;
      font-size: 200%;
      background-color: white;
      box-shadow: 0px 3px 0px 0px rgba(76, 148, 255, 0.7);
    }
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
    margin-top: 2.5rem;
    width: 80%;

    .title {
      letter-spacing: 1px;
      font-size: 180%;
    }

    input {
      width: 80%;
      font-size: 150%;
      background-color: white;
      box-shadow: 0px 3px 0px 0px rgba(76, 148, 255, 0.7);
    }
  }
`;
