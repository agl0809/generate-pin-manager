import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Generate from './Generate/Generate';
import Nav from './Nav/Nav';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/Saved">
            <Saved />
          </Route>
          <Route path="/">
            <Generate />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const Saved = () => {
  return (
    <header className="App-header">
      <h2>Saved</h2>
    </header>
  );
};

export default App;
