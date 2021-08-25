import React, { useState, useEffect } from "react";
import { fetchMovieDetail } from '../../service/service';



function InformationPage() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchAPI = async () => {
      //setNowPlaying(await fetchMovies());
      setMovies(await fetchMovieDetail());
      
    };

    fetchAPI();
  }, []);

  return (
    <div>
      <h1>Test</h1>
    </div>
  );

  }
  
  export default InformationPage;