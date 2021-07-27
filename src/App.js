import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/LandingPage/LandingPage';
import States from './pages/States/States';
import District from './pages/District/District';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/statewise' component={States} />
          <Route path='/districtwise' component={District} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
