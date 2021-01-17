import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';

import Homepage from './components/home/Homepage';
import Events from './components/events/Events';
import Gachas from './components/gachas/Gachas';
import Idols from './components/idols/Idols';
import Songs from './components/songs/Songs';
import Cards from './components/cards/Cards';
import Calculators from './components/calculators/Calculators';
import './App.css';

class App extends Component{
  state = {
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div>
              
              <Header />
              <div className="content">
                <Route exact path="/" component={Homepage} />
                <Route path="/events" component={Events} />
                <Route path="/gachas" component={Gachas} />
                <Route path="/idols" component={Idols} />
                <Route path="/songs" component={Songs} />
                <Route path="/cards" component={Cards} />
                <Route path="/cal" component={Calculators} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
} 



export default App;
