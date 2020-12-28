import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Songs from './components/songs/Songs';
import './App.css';

class App extends Component{
  state = {

  }



  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/"></Route>
            <Route path="/songs" component={Songs} />

          </div>
        </div>
      </Router>
    );
  }
} 

export default App;
