import React from 'react';
import CreatListPage from './CreateListPage';
import NavBar from '../Navbar';
import Footer from '../Footer';

function CreatList (){
    return(
        <div>
            <NavBar/>
            <CreatListPage/>
            <Footer/>
        </div>
    );
}

export default CreatList;