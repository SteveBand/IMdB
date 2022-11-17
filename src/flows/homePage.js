import React from 'react'
import styled from 'styled-components';
import { Movies } from '../components/movies';
import { Search } from '../components/search';
import { ErrorPage } from './errorPage'
//import { MainSection } from '../assets/homepageStyle';
export const HomePage = () => {


    return (
        <Main>
            <Search />
            <Movies />
        </Main>
    );


}

const Main = styled.main`
    
`
  