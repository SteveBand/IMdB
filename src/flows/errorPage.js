import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <Wrapper>
      <Link className="btn" to="/">
        back home
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  background-image: url("https://www.impactplus.com/hubfs/404-error-page-examples-best.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn {
    position: absolute;
    bottom: 30%;
    z-index: 10;
    padding: 10px 16px;
    border-radius: 15%;
    font-size: 1.5rem;
    text-decoration: none;
    color: gray;
    background-color: whitesmoke;
    height: max-content;
    letter-spacing: 3px;
    box-shadow: 0px 0px 14px 10px rgba(240, 240, 240, 0.53);
  }
`;
