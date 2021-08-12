import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Home.jsx';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path= "/" exact component = {Home} />
        </Switch>  

    </Router>
    </div>
  );
}

export default App;
