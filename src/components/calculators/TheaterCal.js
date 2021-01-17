import React, { Component } from 'react';

class TheaterCal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // value: 'Please write an essay about your favorite DOM element.'
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmitA = this.handleSubmitA.bind(this);
  }
  handleSubmitA(event) {
    // alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    const normal_pt = {'2M': 35, '2M+': 62, '4M': 49, '6M': 64, 'MM': 85}
    const normal_item = {'2M': 35, '2M+': 62, '4M': 49, '6M': 64, 'MM': 85}
    const event_pt = {'2M': 269, '2M+': 447, '4M': 358, '6M': 447, 'MM': 537}
    const event_cost = {'2M': 90, '2M+': 150, '4M': 120, '6M': 150, 'MM': 180}
    // console.log(pt)

		return (
      <form onSubmit={this.handleSubmitA}>

      </form>
		);
	}
}


export default TheaterCal;