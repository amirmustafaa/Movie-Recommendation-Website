import React, {useContext} from 'react';
import UserContext from '../../context/context.js';
import Navbar from '../Navbar.jsx';
import UserNavbar from '../UserNavbar.jsx'
import Header from './Header.jsx';
import HomePage from './HomePage.jsx';
import Footer from '../Footer.jsx';





function Home() {
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
        <Header />
        <HomePage />
        <Footer/>
      </div>
    );
  }
  
  export default Home;
  