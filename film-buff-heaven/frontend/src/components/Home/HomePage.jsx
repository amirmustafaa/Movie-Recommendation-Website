import React, { useState, useEffect } from "react";
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchPersons,
  fetchTopratedMovie,
} from "../../service/service.js";

import { Link } from "react-router-dom";




function HomePage() {
  
  //const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [persons, setPersons] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      //setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(28));
      setPersons(await fetchPersons());
      setTopRated(await fetchTopratedMovie());
    };

    fetchAPI();
  }, []);



    return (
    
      <div className = "row">
        <h2 className = "home-title">Top Rated Movies</h2>
          {topRated.slice(0, 20).filter((item) => item.vote_count > 3200).map((item, index) => 
            <div className="card col-lg-3" key = {index}>
              <Link to={`/movie/${item.id}`}>
                <img className="img-fluid" src={item.poster} alt={item.title}></img>
              </Link>
              <div className="mt-3">
                <p style={{ fontWeight: "bolder" }}>{item.title}</p>
                <p>Rated: {item.rating}</p>
                <p>Vote Count: {item.vote_count}</p>
              </div>
            </div>
          )}
        </div>
        
    );
  }

  
  
  export default HomePage;
  