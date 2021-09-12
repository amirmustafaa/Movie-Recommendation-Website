import React, {useContext} from 'react';
import UserContext from '../../context/context.js';
import Navbar from '../Navbar.jsx';
import UserNavbar from '../UserNavbar.jsx'
import InformationPage from './InformationPage.jsx';
import Footer from '../Footer.jsx';

function Information() {
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
        <InformationPage/>
        <Footer/>
      </div>
    );
  }
  
  export default Information;