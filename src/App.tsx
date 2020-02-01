import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { generatePin } from 'generate-pin';
import Nav from './Nav';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
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

class Generate extends React.Component {
  pins = generatePin(5).map(pin => <p>{pin}</p>);
  render() {
    return <header className="App-header">{this.pins}</header>;
  }
}

const Saved = () => {
  return (
    <header className="App-header">
      <h2>Saved</h2>
    </header>
  );
};

export default App;
