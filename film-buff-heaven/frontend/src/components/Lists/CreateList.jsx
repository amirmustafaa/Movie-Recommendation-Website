import React, {useContext} from 'react';
import UserContext from '../../context/context.js';
import CreatListPage from './CreateListPage';
import Navbar from '../Navbar';
import UserNavbar from '../UserNavbar.jsx'
import Footer from '../Footer';

function CreatList (){
    const {userData} = useContext(UserContext);
    return(
        <div>
            {userData.token ? (
            
            <UserNavbar/>
    
              ) : (
                <>
                <Navbar/>
                </>
              )}
            <CreatListPage/>

            <Footer/>
        </div>
    );
}

export default CreatList;