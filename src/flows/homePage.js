import React from 'react'
import styled from 'styled-components';
import { Movies } from '../components/movies';
import { Search } from '../components/search';
//import { MainSection } from '../assets/homepageStyle';
export const HomePage = () => {


    return (
        <main>
            <Search />
            <Movies />
        </main>
    );


}

  