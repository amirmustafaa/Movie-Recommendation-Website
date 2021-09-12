import React, { useState, useEffect, useContext} from "react";
import {Link, useHistory} from 'react-router-dom';
import Axios from 'axios';
import UserContext from "../../context/context";
import {
    fetchMovieSearch
  } from "../../service/service.js";

function CreatListPage() {
    
    const {userData} = useContext(UserContext);
    const token = userData.token;
    let history = useHistory();
    const [state, setState] = useState({
        moviename: "",
        listname: ""
      });

   
    const [movie, setMovie] = useState("");

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
            name: state.listname,
            entries: list,
          };

        const listRes = await Axios.post("http://localhost:8080/api/data/createlist", listObject, {
            headers: { "Authorization":  `Bearer ${token}`},
          });

        history.replace("/")
    }


    useEffect(() => {
        setList(oldArray => [...oldArray, movie]); 
        console.log(movie);
    }, [movie]);
      
    const listItems = list.filter((number)=> number.length > 0).map((number) =>
        <li className = "poster-item"><img width="100" height="150" src ={number} alt="Movie Poster"></img></li>
    );

    

    return(
        <div className = "create-list">
            <input name = "listname" onChange = {handleChange} className="form-control list-name" type="text" placeholder="List Name" aria-label="List Name"/>
            <ol className = "poster-list">{listItems}</ol>
            <div className="searchbar md-form active-cyan-2 mb-3">
                 <input name = "moviename" onChange = {handleChange} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
             </div>
             <div className="row justify-content-center my-3 px-3"> <button type = "submit" onClick= {fetchAPI} className="btn-block btn-color">Add Movie</button> </div>
             <div className="row justify-content-center  px-3"> <button type = "submit" onClick = {createList} className="btn-block btn-color">Create List</button> </div>
        </div>
    );
}

export default CreatListPage;