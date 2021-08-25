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
    // const cookies = new Cookies();
    // let history = useHistory();

    // function logout() {
    //     cookies.set("auth-token", "", { path: '/' }, {httpOnly:true});
    //     history.replace("/");
    // }

    

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div >     
            <Navbar className = "dashNav" light expand="md">
                <NavbarBrand className = "logo"  href="/"><img src = {Logo} alt ="logo"/></NavbarBrand>
                <Link className = "nav-buttons" to={'/login'}>
                    <NavbarText ><Button  color="primary">Sign In</Button>{' '}</NavbarText>
                </Link>
                <NavbarText ><Button  color="primary">Random Movie</Button>{' '}</NavbarText>
            </Navbar>
        </div>

    );
}


export default NavBar;