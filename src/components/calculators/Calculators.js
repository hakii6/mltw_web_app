import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import TheaterCalA from './TheaterCalA';
import TheaterCalB from './TheaterCalB';
import TheaterCalC from './TheaterCalC';
import TourCalA from './TourCalA';
import TourCalB from './TourCalB';
import TourCalC from './TourCalC';

class Calculators extends Component{
  render() {

		return (
      <div>
        <div className = "btn-group">
          <div className = "btn-group">
            <button type = "button" className = "btn btn-primary dropdown-toggle" data-toggle="dropdown">
              集物<span className="caret"></span>
            </button>
            <ul className = "dropdown-menu" role="menu">
              <li><Link to="/cal/theater/A">總分預測</Link></li>
              <li><Link to="/cal/theater/B">資源消耗預測</Link></li>
              <li><Link to="/cal/theater/C">控分</Link></li>
            </ul>
          </div>

          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              巡演<span className="caret"></span>
            </button>
            <ul className="dropdown-menu" role="menu">
              <li><Link to="/cal/tour/A">總分預測</Link></li>
              <li><Link to="/cal/tour/B">資源消耗預測</Link></li>
              <li><Link to="/cal/tour/C">控分</Link></li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route path="/cal/theater/A" component={TheaterCalA} />
          <Route path="/cal/theater/B" component={TheaterCalB} />
          <Route path="/cal/theater/C" component={TheaterCalC} />
          <Route path="/cal/tour/A" component={TourCalA} />
          <Route path="/cal/tour/B" component={TourCalB} />
          <Route path="/cal/tour/C" component={TourCalC} />
        </Switch>
      </div>
		);
	}
}


export default Calculators;