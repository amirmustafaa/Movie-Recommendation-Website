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

          <div class="card info-card">
            <h1 className = "card-info">{movies.title}</h1>
            <h3 className = "card-info">Description:</h3>
            <p className = "card-info">{movies.overview}</p>
            <div class="container">
            <div class="row">
              <div class="col-sm">
                <h3 className = "card-info">Runtime</h3>
                <p className = "card-info">{movies.runtime + " mins."}</p>
                <h3 className = "card-info">Release Date</h3>
                <p className = "card-info">{movies.release_date}</p>
                <h3 className = "card-info">Budget</h3>
                <p className = "card-info">{"$" + movies.budget}</p>
              </div>
              <div class="col-sm">
                <h3 className = "card-info">Revenue</h3>
                <p className = "card-info">{"$" + movies.revenue}</p>
                <h3 className = "card-info">Rating</h3>
                <p className = "card-info">{movies.vote_average + "/10"}</p>
                <h3 className = "card-info">Vote Count</h3>
                <p className = "card-info">{movies.vote_count}</p>
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