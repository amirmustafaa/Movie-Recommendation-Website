import React from 'react';
import Logo from './tmdbLogo.png'



function Footer() {
    return (
      <div>
        <footer className="page-footer font-small unique-color-dark pt-4">
        <h2 className = "logo-heading">Powered By:</h2>
        <img src = {Logo} alt="TMDB Logo"></img>
        <div className="container">
          <ul className="list-unstyled list-inline text-center py-2">
            <li className="list-inline-item">
              <h5 className="mb-1 footer-text">Register for free</h5>
            </li>
            <li className="list-inline-item">
              <a href="/register" className=" footer-text btn btn-outline-white btn-rounded">Sign up!</a>
            </li>
          </ul>
        </div>
        <div className="footer-text footer-copyright text-center py-3">© 2021 Copyright: Amir Mustafaa
        </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;
  