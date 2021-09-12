import React, {useContext} from 'react';
import UserContext from '../../context/context.js';
import Navbar from '../Navbar.jsx';
import UserNavbar from '../UserNavbar.jsx'
import LoginPage from './LoginPage.jsx';
import Footer from '../Footer.jsx';

function Login() {
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
        <LoginPage />
        <Footer />
      </div>
    );
  }
  
  export default Login;
  

