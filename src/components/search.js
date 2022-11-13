import React from 'react'
import styled from "styled-components";

export const Search = () => {


    return (
        <>
            <SearchForm>
                <input type='text' placeholder='search a movie' />
            </SearchForm>
        </>
    );
}

const SearchForm = styled.form`
    width: 600px;
    margin: 0 auto;
    margin-top: 5rem;
    margin-left: 10rem;
    
    input {
        position: relative;
        top: 0;
        padding: 1rem;
        width: 500px;
        border: none;
        background-color: transparent;
        font-size: 1.5rem;
        outline: none;
        box-shadow: 0px 5px 0px 0px rgba(76,148,255,0.99);
    }
`
