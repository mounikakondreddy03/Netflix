import React, { useEffect, useRef, useState } from 'react'
import './titlecards.css'
import { Link } from 'react-router-dom'

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  // console.log("API Key:", API_KEY);

  useEffect(() => {
    if (!API_KEY) {
      console.error("TMDB API Key is missing!");
      return;
    }

    fetch(`https://api.themoviedb.org/3/movie/${category || 'now_playing'}?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then(async (res) => {
        if (res.status_code === 7) {
          console.error('Invalid API Key');
        } else {
          const moviesWithTrailers = await Promise.all(
            res.results.map(async (movie) => {
              // Fetch trailers for each movie
              const trailerRes = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`);
              const trailerData = await trailerRes.json();
              
              // Check if at least one trailer exists
              if (trailerData.results && trailerData.results.length > 0) {
                return { ...movie, trailerAvailable: true };
              }
              return null;
            })
          );

          // Filter out movies without trailers
          const filteredMovies = moviesWithTrailers.filter((movie) => movie !== null);
          setApiData(filteredMovies);
        }
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, [category, API_KEY]);
return (
  <div className="title-cards">
    <h2>{title || 'Popular on Netflix'}</h2>
    <div className="card-list" ref={cardsRef}>
      {apiData.length > 0 ? (
        apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={card.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
              : 'https://via.placeholder.com/500x300?text=No+Image'
              }
              alt={card.original_title}
            />
            <p>{card.original_title}</p> 
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </div>
);
};

export default TitleCards