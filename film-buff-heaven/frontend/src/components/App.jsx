import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import UserContext from "../context/context.js";
import Home from './Home/Home.jsx';
import Information from './Information/Information.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import CreateList from './Lists/CreateList.jsx';
import MovieList from './Lists/MovieList.jsx';

function App() {
  const cookies = new Cookies();


  const [userData, setUserData] = useState({
    token:undefined,
    user: undefined
  })

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = cookies.get("auth-token");
      if (token === undefined) {
        cookies.set("auth-token", "", { path: '/' }, {httpOnly:true});
        token = "";
      }

        const userRes = await Axios.get("http://localhost:8080/api/test/user", {
          headers: { "Authorization":  `Bearer ${token}`},
        });
        if(userRes.data){
          setUserData({
            token,
            user: userRes.data,
          });
         
      }

    };

    checkLoggedIn();
  }, []);

  return(
    <Router>
      <UserContext.Provider value = {{userData, setUserData}}>
        <Switch>
          <Route path= "/" exact component = {Home} />
          <Route path= "/information/:id" component = {Information} />
          <Route path= "/login" component = {Login} />
          <Route path= "/register" component = {Register} />

        </Switch>
          {userData.token ? (
            <Switch>
              <Route path= "/createlist" component = {CreateList} />
              <Route path= "/movielist/:listid"  component = {MovieList} />
              
            </Switch>

   

          ) : (


            <>
            </>
          )}
         
      </UserContext.Provider>
    </Router>


  );
}

export default App;
