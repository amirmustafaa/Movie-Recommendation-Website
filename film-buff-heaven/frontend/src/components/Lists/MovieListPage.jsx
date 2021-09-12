import React, {useState, useContext, useEffect} from 'react';
import UserContext from "../../context/context";
import { Link } from "react-router-dom";
import {useLocation } from 'react-router';
import Axios from 'axios';
import Cookies from 'universal-cookie';


function MovieList (){
    const cookies = new Cookies();
    const {userData} = useContext(UserContext);
    const token = userData.token;
    const location = useLocation();
    const listId = location.state.data;

    const [dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);

    const [listState, setListState] = useState([]);


    const getData = async () =>{
        
        const listObject = {
            listId: listId
        };

        const dataRes = await Axios.post("http://localhost:8080/api/data/getlistdata",listObject,{
            headers: { "Authorization":  `Bearer ${token}`},
          });

        console.log(dataRes.data);

       
    }

    useEffect(() => {
        getData();
      },[])

    return(
        <div>
            <h1>Test</h1>
        </div>
    );
}

export default MovieList;