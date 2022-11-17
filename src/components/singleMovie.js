import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { API_ENDPOINT } from '../context/context';

export const SingleMovie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);


    const handleFetch = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url)
            const data = await response.json();
            if (data.Response === 'True') {
                setLoading(false);
                setMovie(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleFetch(`${API_ENDPOINT}&i=${id}`)
    }, [id])

    if (loading) {
        return <Loading></Loading>
    }

    const { Title, Year, Rated, Genre, Language, Poster, Plot} = movie;
    return (
        <React.StrictMode>
            <Wrapper>
                <img src={Poster} alt={Title} />
                <div className='movie-info'>
                    <h4 className='title'>{Title}</h4>
                    <p className='plot'>{Plot === 'N/A' ? null : Plot}</p>
                    <h4 className='year'>{Year === 'N/A' ? null : Year}</h4>
                    <Link to="/" className='btn'>
                        back home                   
                    </Link>
                </div>
            </Wrapper>
        </React.StrictMode>
    );
}

const Wrapper = styled.section`
    min-height: 100vh;
    display: flex;
    margin-left: 30rem;
    margin-top: 5rem;
    
    img{
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
    
    .footer {
        display: flex;
        justify-content: space-between;
        justify-content: center;
        align-items: center;
    }

    p{
        margin: 0 10px
    }

    .btn {
        text-decoration: none;
        font-size: 20px;
        background-color: #49A6E9;
        color: white;
        padding: 5px 30px;
        border-radius: 8%;
    }
`

const Loading = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: #49A6E9;
  animation: spinner 0.6s linear infinite;

  @keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
`