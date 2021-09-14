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
    const [id, setId] = useState();

    const [list, setList] = useState([])
    const [idList, setIdList] = useState([]);


    function handleChange(event){
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value
        });
      }
    
    const fetchAPI = async () => {
        
        const dataRes = (await fetchMovieSearch(state.moviename));
        if(dataRes === ""){

        }else{
        setMovie(dataRes.poster);
        setId(dataRes.id);
        } 
      
        
    };

    const createList = async () =>{

        
        const listObject = {
            name: state.listname,
            entries: list,
            movieId: idList
          };

        const listRes = await Axios.post("http://localhost:8080/api/data/createlist", listObject, {
            headers: { "Authorization":  `Bearer ${token}`},
          });
        

        history.replace("/")
    }


    useEffect(() => {
        setList(oldArray => [...oldArray, movie]); 
    }, [movie]);

    useEffect(() => {
      setIdList(oldArray2 => [...oldArray2, id]); 
  }, [id]);
      
    const listItems = list.filter((number)=> number.length > 0).map((number) =>
        <li className = "poster-item"><img width="160" height="229" src ={number} alt="Movie Poster"></img></li>
    );

    

    return(
        <div className = "create-list">
            <input name = "listname" onChange = {handleChange} className="form-control list-name" type="text" placeholder="Enter List Name" aria-label="List Name"/>
            <ul className = "list-group-numbered poster-list">{listItems}</ul>
            <div className="searchbar md-form active-cyan-2 mb-3">
                 <input name = "moviename" onChange = {handleChange} className=" list-name form-control" type="text" placeholder="Enter Movie" aria-label="Search"/>
             </div>
             <div className="row my-3 px-3 list-button"> <button type = "submit" onClick= {fetchAPI} className=" list-button btn-block btn-color">Add Movie</button> </div>
             <div className="row px-3 list-button "> <button type = "submit" onClick = {createList} className=" list-button btn-block btn-color">Create List</button> </div>
        </div>
    );
}

export default CreatListPage;