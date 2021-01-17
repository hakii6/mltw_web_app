import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import TheaterCal from './TheaterCal';
import TourCal from './TourCal';

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
              <li><Link to="/cal/theater/1">總分預測</Link></li>
              <li><Link to="/cal/theater/2">資源消耗預測</Link></li>
              <li><Link to="/cal/theater/3">控分</Link></li>
            </ul>
          </div>

          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              巡演<span className="caret"></span>
            </button>
            <ul className="dropdown-menu" role="menu">
              <li><Link to="/cal/tour/1">總分預測</Link></li>
              <li><Link to="/cal/tour/2">資源消耗預測</Link></li>
              <li><Link to="/cal/tour/3">控分</Link></li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route path="/cal/theater/:ID" component={TheaterCal} />
          <Route path="/cal/tour/:ID" component={TourCal} />
        </Switch>
      </div>
		);
	}
}


export default Calculators;