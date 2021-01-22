import React, { Component } from 'react';

class TourCalB extends Component{
  constructor(props) {
    super(props);
    this.params = this.props.match.params;
    this.state = {
    }
  }
  render() {

    return (
      <div>        
      	<div className="alert alert-danger">本計算機尚未完成</div>
			</div>
    );
  }
}


export default TourCalB;