import React from 'react';
import Navbar from '../Navbar.jsx';
import Header from './Header.jsx';
import HomePage from './HomePage.jsx';
import Footer from '../Footer.jsx';



function Home() {
    return (
      <div>
        <Navbar />
        <Header />
        <HomePage />
        <Footer/>
      </div>
    );
  }
  
  export default Home;
  