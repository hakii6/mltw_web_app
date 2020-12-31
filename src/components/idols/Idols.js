import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import IdolItem from './IdolItem';
import IdolPage from './IdolPage';
import axios from 'axios';

class Idols extends Component{
  constructor(props) {
    super(props);
    this.state = {
      idols: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8001/api/v0/idols')
      .then(res => {
      	this.setState({ idols: res.data });
        console.log(this.state.idols);
      });
  }
  render() {
    let princess, fairy, angel, ex;
    princess = this.state.idols
      .filter((idol) => idol.Type === "PRINCESS")
      .map((idol) => <IdolItem key={idol.ID} idol={idol} />);
    fairy = this.state.idols
      .filter((idol) => idol.Type === "FAIRY")
      .map((idol) => <IdolItem key={idol.ID} idol={idol} />);
    angel = this.state.idols
      .filter((idol) => idol.Type === "ANGEL")
      .map((idol) => <IdolItem key={idol.ID} idol={idol} />);
    ex = this.state.idols
      .filter((idol) => idol.Type === "EX")
      .map((idol) => <IdolItem key={idol.ID} idol={idol} />);



		return (
      <Switch>
        <Route exact path="/idols">
          <div className='row'>
            { princess }
          </div>
          <div className='row'>
            { fairy }
          </div>
          <div className='row'>
            { angel }
          </div>
          <div className='row'>
            { ex }
          </div>
        </Route>
        <Route path="/idols/:ID" component={ IdolPage } />
      </Switch>

    );
	}
}

const switchStyle = {
}

export default Idols;