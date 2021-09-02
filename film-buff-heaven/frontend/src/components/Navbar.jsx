import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import { useHistory} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavbarText,
    Button
  } from 'reactstrap';

import Logo from './logo.png';


function NavBar(){
     const cookies = new Cookies();
     let history = useHistory();

    function logout() {
        cookies.set("auth-token", "", { path: '/' }, {httpOnly:true});
        history.replace("/");
    }

    

    let movieArr = [278, 238, 424, 240, 129, 496243, 497, 389, 680, 155, 122, 13, 11216, 637, 
                    429, 346, 311, 539, 550, 324857, 429617, 399566, 557, 527774, 475557,578701, 
                    672, 671, 274, 578, 44214, 1678, 3035, 28, 490132, 8587, 600354, 10098,
                    186, 629, 1124, 857, 50014, 11324, 289, 124, 229, 1422, 925, 68718,7345, 
                    901, 3082, 105, 11104, 106646, 3034, 313369, 262];

    let rand =Math.floor(Math.random() * movieArr.length -1);

    let num = movieArr[rand];


    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div >     
            <Navbar className = "dashNav fixed-top" light expand="md">
                <NavbarBrand className = "logo"  href="/"><img src = {Logo} alt ="logo"/></NavbarBrand>
                <Link className = "nav-buttons" to={'/login'}>
                    <NavbarText ><Button  color="primary">Sign In</Button>{' '}</NavbarText>
                </Link>
            
                <NavbarText ><Button onClick={() => {window.location.href="/information/" + num}} color="primary">Random Movie</Button>{' '}</NavbarText>
                
            </Navbar>
        </div>

    );
}


export default NavBar;