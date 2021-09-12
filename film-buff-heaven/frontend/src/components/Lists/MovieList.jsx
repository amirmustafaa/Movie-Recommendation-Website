import React, {useContext} from 'react';
import UserContext from '../../context/context.js';
import MovieListPage from './MovieListPage';
import Navbar from '../Navbar';
import UserNavbar from '../UserNavbar.jsx'
import Footer from '../Footer';

function MovieList (){
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
            <MovieListPage/>
            <Footer/>
        </div>
    );
}

export default MovieList;