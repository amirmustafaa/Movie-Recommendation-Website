import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Home.jsx';
import Information from './Information/Information.jsx';
import Login from './Login/Login.jsx';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path= "/" exact component = {Home} />
          <Route path= "/information" exact component = {Information} />
          <Route path= "/login" exact component = {Login} />
        </Switch>  

    </Router>
    </div>
  );
}

export default App;
