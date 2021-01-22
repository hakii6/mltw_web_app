import React, { Component } from 'react';

class TourCalA extends Component{
  constructor(props) {
    super(props);
    this.state = {
      stone: 0,
      energy_limit: 120,
      energy_extra: 0,
      work: 100,
      work_diff: 30,
      normal_diff: "MM",
      event_diff: "MM"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {

    return (
      <div><div className="alert alert-danger">本計算機尚未完成</div></div>
    );
  }
}


export default TourCalA;