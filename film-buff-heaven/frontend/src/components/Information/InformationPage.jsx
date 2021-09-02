import React, { useState, useEffect } from "react";
import { fetchMovieDetail } from '../../service/service';
import {useParams } from 'react-router-dom';



function InformationPage() {
  const [movies, setMovies] = useState([]);
  let params = useParams();
  
  

  useEffect(() => {
    const fetchAPI = async () => {
      setMovies(await fetchMovieDetail(params.id));
      
    };

    fetchAPI();
  }, []);

  return (
    <div>
      <h1 className = "info-title">{movies.title}</h1>
    </div>
  );

  }
  
  export default InformationPage;