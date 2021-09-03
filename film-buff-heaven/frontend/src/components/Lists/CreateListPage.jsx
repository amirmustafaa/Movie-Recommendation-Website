import React, { useState, useEffect } from "react";
import {
    fetchMovieSearch
  } from "../../service/service.js";

function CreatListPage() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
          setMovie(await fetchMovieSearch());
        };
    
        fetchAPI();
      }, []);

    return(
        <div>
            <div className="searchbar md-form active-cyan-2 mb-3">
                 <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
             </div>
        </div>
    );
}

export default CreatListPage;