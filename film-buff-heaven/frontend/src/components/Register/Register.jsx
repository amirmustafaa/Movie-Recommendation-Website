import React, {useContext} from 'react';
import UserContext from '../../context/context.js';
import Navbar from '../Navbar.jsx';
import UserNavbar from '../UserNavbar.jsx'
import RegisterPage from './RegisterPage.jsx';
import Footer from '../Footer.jsx';

function Register() {
  const {userData} = useContext(UserContext);
    return (
      <div>
        {userData.token ? (
            
            <UserNavbar/>
    
              ) : (
                <>
                <Navbar/>
                </>
              )}
        <RegisterPage />
        <Footer />
      </div>
    );
  }
  
  export default Register;
  
