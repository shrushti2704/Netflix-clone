
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const BannerContainer = styled.header`
  background-size: cover;
  background-position: center;
  color: white;
  object-fit: contain;
  height: 448px;
`;

const BannerContents = styled.div`
  padding: 140px 30px;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const BannerButtons = styled.div`
  display: flex;
`;

const BannerButton = styled.button`
  cursor: pointer;
  color: white;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.5rem 2rem;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);
  &:hover {
    background-color: #e6e6e6;
    color: black;
    transition: all 0.2s;
  }
`;

const BannerDescription = styled.h1`
  max-width: 360px;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  height: 80px;
`;

const BannerFadeBottom = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);
`;

const API_KEY = 'YOUR_TMDB_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';
const fetchUrl = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`;

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
    }
    fetchData();
  }, []);

  return (
    <BannerContainer style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    }}>
      <BannerContents>
        <BannerTitle>{movie?.title || movie?.name || movie?.original_name}</BannerTitle>
        <BannerButtons>
          <BannerButton>Play</BannerButton>
          <BannerButton>My List</BannerButton>
        </BannerButtons>
        <BannerDescription>{movie?.overview}</BannerDescription>
      </BannerContents>
      <BannerFadeBottom />
    </BannerContainer>
  );
}

export default Banner;
