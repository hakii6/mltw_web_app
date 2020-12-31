import React, { Component } from 'react';
import { Link, useParams, Route } from 'react-router-dom';
import axios from 'axios';

class IdolPage extends Component{
  constructor(props) {
    super(props);
    this.params = this.props.match.params;
    this.state = {
      idol: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8001/api/v0/idols/' + this.params.ID )
      .then(res => {
        this.setState({ idol: res.data });
        console.log(this.state.idol);
      });
  }
  render() {
		return (
        <div className='col-md-2'>
          aaa
        </div>
        
		);
	}
}


export default IdolPage;