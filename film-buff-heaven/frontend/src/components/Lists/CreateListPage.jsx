import React, { useState, useEffect } from "react";
import {
    fetchMovieSearch
  } from "../../service/service.js";

function CreatListPage() {

    const [state, setState] = useState({
        moviename: "",
      });

    
   
    const [movie, setMovie] = useState([]);

    const [list, setList] = useState([])


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
        setList(oldArray => [...oldArray, movie]); 
    }, [movie]);

    console.log(movie);
     
    
    
    
    const listItems = list.map((number) =>
        <li><img   width="100" height="150" src ={number} alt="Movie Poster"></img></li>
    );

    return(
        <div>
            <ol>{listItems}</ol>
            <div className="searchbar md-form active-cyan-2 mb-3">
                 <input name = "moviename" onChange = {handleChange} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
             </div>
             <div className="row justify-content-center my-3 px-3"> <button type = "submit" onClick= {fetchAPI} className="btn-block btn-color">Search</button> </div>
             <div className="row justify-content-center my-3 px-3"> <button type = "submit"  className="btn-block btn-color">Create List</button> </div>
        </div>
    );
}

export default CreatListPage;