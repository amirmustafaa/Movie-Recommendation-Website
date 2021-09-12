import React, {useState, useContext, useEffect} from 'react';
import { fetchMovieDetail } from '../../service/service';
import UserContext from "../../context/context";
import { Link } from "react-router-dom";
import {useLocation } from 'react-router';
import {useParams } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'universal-cookie';


function MovieList (){
    const cookies = new Cookies();
    const {userData} = useContext(UserContext);
    const token = userData.token;
    //const location = useLocation();
    let params = useParams();
    const listId = params.listid;
    

    const [listState, setListState] = useState([]);
    const [movies, setMovies] = useState([]);

    const getData = async () =>{
        
        const listObject = {
            listId: listId
        };

        const dataRes = await Axios.post("http://localhost:8080/api/data/getlistdata",listObject,{
            headers: { "Authorization":  `Bearer ${token}`},
          });

        setListState(dataRes.data.entries);

        

       
    }

    useEffect(() => {
        getData();
      },[])


   

    

      const listItems = listState.filter((number)=> number.length > 0).map((number) =>
      <li className = "poster-item"><img width="100" height="150" src ={number} alt="Movie Poster"></img></li>
     
  );

    return(
        <div className = "create-list">
            <ol className = "poster-list">{listItems}</ol>
            
        </div>
    );
}

export default MovieList;