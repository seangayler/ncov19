import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../home/Home';

class App extends Component {
  state = {
    updated: 'Now',
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <header className="update">
            <p className="update__text">Last updated <strong>{this.state.updated}</strong></p>
          </header>
          <Route exact path="/" component={Home}/>
          <footer className="footer">

          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
