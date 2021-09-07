import React, { useState, useEffect } from "react";
import {
    fetchMovieSearch
  } from "../../service/service.js";

function CreatListPage() {

    const [state, setState] = useState({
        moviename: "",
      });

    const [list, setList] = useState([])
 
    const [movie, setMovie] = useState([]);

    function handleChange(event){
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value
        });
      }

    const fetchAPI = async () => {
        setMovie(await fetchMovieSearch(state.moviename));
        
    };


    useEffect(() => {

    }, [movie]);

    useEffect(() => {
        if(movie.results !== undefined){
            setList(oldArray => [...oldArray,movie.results[0].title]);
         }

    }, [movie]);
    
    

    const listItems = list.map((number) =>
        <li>{number}</li>
    );

    return(
        <div>
            <ul>{listItems}</ul>
            <div className="searchbar md-form active-cyan-2 mb-3">
                 <input name = "moviename" onChange = {handleChange} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
             </div>
             <div className="row justify-content-center my-3 px-3"> <button type = "submit" onClick= {fetchAPI} className="btn-block btn-color">Search</button> </div>
        </div>
    );
}

export default CreatListPage;