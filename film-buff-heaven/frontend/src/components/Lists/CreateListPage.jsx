import React, { useState, useEffect } from "react";
import Axios from 'axios';
import {
    fetchMovieSearch
  } from "../../service/service.js";

function CreatListPage() {

    const [state, setState] = useState({
        moviename: "",
      });

    const [name, setName] = useState();
   
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

    const createList = async () =>{

        const listObject = {
            movielist: list,
            name: name,
          };

        const ListRes = await Axios.post("http://localhost:8080/api/data/createList", listObject);


    }

    useEffect(() => {
        setList(oldArray => [...oldArray, movie]); 
    }, [movie]);
      
    const listItems = list.filter((number)=> number.length > 0).map((number) =>
        <li><img width="100" height="150" src ={number} alt="Movie Poster"></img></li>
    );



    return(
        <div>
            <ol>{listItems}</ol>
            <div className="searchbar md-form active-cyan-2 mb-3">
                 <input name = "moviename" onChange = {handleChange} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
             </div>
             <div className="row justify-content-center my-3 px-3"> <button type = "submit" onClick= {fetchAPI} className="btn-block btn-color">Add Movie</button> </div>
             <div className="row justify-content-center my-3 px-3"> <button type = "submit" onClick = {createList} className="btn-block btn-color">Create List</button> </div>
        </div>
    );
}

export default CreatListPage;