import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardItem from './CardItem';
import CardPage from './CardPage';
import axios from 'axios';

class Cards extends Component{
  state = {
    cards: []
  }
  componentDidMount() {

  }

  render() {
		return (
      <Switch>
        <Route exact path="/cards" />
        <Route path="/cards/:ID" component={ CardPage } />
      </Switch>

      );
	}
}


export default Cards;