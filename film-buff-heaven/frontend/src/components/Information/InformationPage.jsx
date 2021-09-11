import React, { useState, useEffect } from "react";
import { fetchMovieDetail } from '../../service/service';
import {useParams } from 'react-router-dom';



function InformationPage() {
  const [movies, setMovies] = useState([]);
  let params = useParams();
  const posterUrl = 'https://image.tmdb.org/t/p/original/';
  
  

  useEffect(() => {
    const fetchAPI = async () => {
      setMovies(await fetchMovieDetail(params.id));
      
    };

    fetchAPI();
  }, []);

  return (
    <div className = "info-page">
      <div className = "info-container">
        <div class="card-group">
          
          <div class="card">
            <img className = "info-img" src = {posterUrl + movies.poster_path}></img>
          </div>

          <div class="card">
            <h1 className = "card-title">{movies.title}</h1>
            <h3>Description:</h3>
            <p>{movies.overview}</p>
            <div class="container">
            <div class="row">
              <div class="col-sm">
                <h3>Runtime</h3>
                <p>{movies.runtime + " mins."}</p>
                <h3>Release Date</h3>
                <p>{movies.release_date}</p>
                <h3>Budget</h3>
                <p>{"$" + movies.budget}</p>
              </div>
              <div class="col-sm">
                <h3>Revenue</h3>
                <p>{"$" + movies.revenue}</p>
                <h3>Rating</h3>
                <p>{movies.vote_average + "/10"}</p>
                <h3>Vote Count</h3>
                <p>{movies.vote_count}</p>
              </div>
            </div>
          </div>
            
          </div>

        </div>

      </div> 
    </div>

  );

  }
  
  export default InformationPage;