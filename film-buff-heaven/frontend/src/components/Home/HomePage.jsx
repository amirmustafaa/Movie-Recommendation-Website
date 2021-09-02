import React, { useState, useEffect } from "react";
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchPersons,
  fetchTopratedMovie,
  fetchTopratedMovie2
} from "../../service/service.js";

import { Link } from "react-router-dom";




function HomePage() {
  
  //const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [persons, setPersons] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [topRated2, setTopRated2] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      //setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(28));
      setPersons(await fetchPersons());
      setTopRated(await fetchTopratedMovie());
      setTopRated2(await fetchTopratedMovie2());
    };

    fetchAPI();
  }, []);



    return (
      <div className = "home-content">
        <h2 className = "home-title">Top Rated Movies</h2>
        <div className = "row movie-home">
          
            {topRated.slice(0, 20).filter((item) => item.vote_count > 3200).map((item, index) => 
              <div className="card movie-card   col-sm-5 col-md-3 col-lg-2" key = {index}>
                <Link to={`/information/${item.id}`}>
                  <img className="img-fluid home-img" src={item.poster} alt={item.title}></img>
                </Link>
                <div className="mt-3">
                  <p style={{ fontWeight: "bolder" }}>{item.title}</p>
                  <p>Rated: {item.rating}</p>
                  <p>Vote Count: {item.vote_count}</p>
                </div>
              </div>
            )}
            {topRated2.slice(0, 20).filter((item) => item.vote_count > 3200).map((item, index) => 
              <div className="card movie-card col-sm-5 col-md-3  col-lg-2" key = {index}>
                <Link to={`/information/${item.id}`}>
                  <img className="img-fluid home-img" src={item.poster} alt={item.title}></img>
                </Link>
                <div className="mt-3">
                  <p style={{ fontWeight: "bolder" }}>{item.title}</p>
                  <p>Rated: {item.rating}</p>
                  <p>Vote Count: {item.vote_count}</p>
                </div>
              </div>
            )}
          </div>
        </div>
    );
  }

  
  
  export default HomePage;
  