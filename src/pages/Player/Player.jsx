import React, { useEffect, useState } from 'react'
import './player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Link, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const [apiData, setApiData] = useState(null);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        const data = await res.json();

        if (data.results && data.results.length > 0) {
          setApiData(data.results[0]);
        } else {
          console.warn("No video found");
          setApiData(null)
        }
      } catch(error) {
        console.error("Error fetching video:", error);
      }
    };
    fetchVideo();
  }, [id, API_KEY]);
  
  return (
    <div className='player'>
      <Link to="/Home"> <img src={back_arrow_icon} alt="Back" /></Link>

      {apiData ? (
        <>
        <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title={apiData.name || "Trailer"} frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at ? apiData.published_at.slice(0,10) : "Unknown Date"}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
        </>
      ) : (
        <p>Video not available</p>
      )}
    </div>
  );
};

export default Player