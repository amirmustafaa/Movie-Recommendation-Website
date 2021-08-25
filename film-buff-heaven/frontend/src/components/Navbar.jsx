import React, {useState} from 'react';
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
                <NavbarText className = "nav-buttons"><Button  color="primary">Sign In</Button>{' '}</NavbarText>
                <NavbarText ><Button  color="primary">Random Movie</Button>{' '}</NavbarText>
            </Navbar>
        </div>

    );
}


export default NavBar;