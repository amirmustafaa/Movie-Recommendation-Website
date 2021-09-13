import React, {useState, useContext, useEffect} from 'react';
import UserContext from "../context/context";
import { Link } from "react-router-dom";
import Axios from 'axios';
import Cookies from 'universal-cookie';
import { useHistory} from 'react-router-dom';





function UserNavbar(){
    const cookies = new Cookies();
    const {userData} = useContext(UserContext);
    const token = userData.token;

    const [dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);

    const [listState, setListState] = useState([]);

    function logout() {
        cookies.set("auth-token", "", { path: '/' }, {httpOnly:true});
    }

    const getData = async () =>{


        const dataRes = await Axios.get("http://localhost:8080/api/data/getlist",{
            headers: { "Authorization":  `Bearer ${token}`},
          });

        setListState(dataRes.data);

       
    }

    useEffect(() => {
        getData();
      },[])

    let movieArr = [278, 238, 424, 240, 129, 496243, 497, 389, 680, 155, 122, 13, 11216, 637, 
                    429, 346, 311, 539, 550, 324857, 429617, 399566, 557, 527774, 475557,578701, 
                    672, 671, 274, 578, 44214, 1678, 3035, 28, 490132, 8587, 600354, 10098,
                    186, 629, 1124, 857, 50014, 11324, 289, 124, 229, 1422, 925, 68718,7345, 
                    901, 3082, 105, 11104, 106646, 3034, 313369, 262];

    let rand =Math.floor(Math.random() * movieArr.length -1);

    let num = movieArr[rand];

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div className="container px-5">
                    <a className="navbar-brand" href="/">Film Buff Heaven</a>
                    <div className="navbar-collapse collapse show" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a  onClick={logout}className="nav-link" href="/">Logout</a></li>
                            <Link style={{ textDecoration: 'none' }}>
                            <li className="nav-item nav-link" onClick={() => {window.location.href="/information/" + num}}>Random Movie</li>
                            </Link>
                            <Link to = "/createlist" style={{ textDecoration: 'none' }}>
                            <li className="nav-item nav-link" >Create a List</li>
                            </Link>
                            <li className="nav-item" onClick={toggleOpen}>
                                <div className="dropdown">
                                <Link onClick={toggleOpen} className = "nav-link"style={{ textDecoration: 'none' }}>My Lists</Link>
                                    <div
                                    className={`dropdown-menu ${dropdown ? 'show' : ''}`}
                                    aria-labelledby="dropdownMenuButton"
                                    >
                                    
                              {listState.map(function(d, idx){
                                return  (
                                    <Link   className = "drop" style={{ textDecoration: 'none' }} key = {idx}   onClick={() => {window.location.href='/movielist/' + d.id}} >
                                    <p key = {idx}>{d.name}</p>
                                    </Link>
                                );
                                })}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        

    );
}


export default UserNavbar;