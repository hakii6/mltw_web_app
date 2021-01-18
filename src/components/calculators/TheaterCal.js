import React, { Component } from 'react';

class TheaterCal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      stone: 0,
      energy_limit: 120,
      energy_extra: 0,
      work: 100,
      normal_diff: "MM",
      event_diff: "MM"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    // this.setState({stone: event.target.value});
  }
  handleSubmit(event) {
    const normal_cost_dict = {'2M': 15, '2M+': 25, '4M': 20, '6M': 25, 'MM': 30}
    const normal_pt_dict = {'2M': 35, '2M+': 62, '4M': 49, '6M': 64, 'MM': 85}
    const normal_item_dict = {'2M': 35, '2M+': 62, '4M': 49, '6M': 64, 'MM': 85}
    const event_pt_dict = {'2M': 269, '2M+': 447, '4M': 358, '6M': 447, 'MM': 537}
    const event_cost_dict = {'2M': 90, '2M+': 150, '4M': 120, '6M': 150, 'MM': 180}

    const normal_cost = normal_cost_dict[this.state.normal_diff];
    const normal_pt = normal_pt_dict[this.state.normal_diff];
    const normal_item = normal_item_dict[this.state.normal_diff];

    const event_cost = event_cost_dict[this.state.event_diff];
    const event_pt = event_pt_dict[this.state.event_diff];



    var energy_total = parseInt(this.state.stone / 50) * this.state.energy_limit + this.state.energy_extra;
    var energy_on_work = parseInt(energy_total * this.state.work) / 100;
    var energy_on_live = parseInt(energy_total - energy_on_work);

    var item_get = parseInt((energy_on_work * 0.7 + energy_on_live * 1) / normal_cost) * normal_item ;
    var point_on_normal = item_get;
    var point_on_event = parseInt(item_get * event_pt) / event_cost;

    var point_total = parseInt(point_on_normal + point_on_event);

    this.setState({
      result: point_total
    });


    event.preventDefault();
  }
  render() {

    // console.log(pt)

		return (
      <div>
        還沒完成!!!!!!!!!!!!!!!!!!!!!!!!!!!
        <form onSubmit={this.handleSubmit}>
          <label>
            準備石頭：
            <input type="number" name="stone" value={this.state.stone} onChange={this.handleInputChange} min="0" max="999999"/>
          </label>

          <label>
            活力上限：
            <input type="number" name="energy_limit" value={this.state.energy_limit} onChange={this.handleInputChange} min="0" max="240"/>
          </label>

          <label>
            準備體力：
            <input type="number" name="energy_extra" value={this.state.energy_extra} onChange={this.handleInputChange} min="0" max="9999999"/>
          </label>

          <label>
            工作佔比(%)：
            <input type="number" name="work" value={this.state.work} onChange={this.handleInputChange} min="0" max="100"/>
          </label>

          <label>
            所打一般曲難度：
            <select name="normal_diff" value={this.state.normal_diff} onChange={this.handleInputChange}>
              <option value="2M">2M</option>
              <option value="2M+">2M+</option>
              <option value="4M">4M</option>
              <option value="6M">6M</option>
              <option value="MM">MM</option>
            </select>
          </label>

          <label>
            所打活動曲難度：
            <select name="event_diff" value={this.state.event_diff} onChange={this.handleInputChange}>
              <option value="2M">2M</option>
              <option value="2M+">2M+</option>
              <option value="4M">4M</option>
              <option value="6M">6M</option>
              <option value="MM">MM</option>
            </select>
          </label>
          <input type="submit" value="Submit" />

        </form>

        <div>
          結果：
          <div>總分：{this.state.result}</div>
        </div>
      </div>
		);
	}
}


export default TheaterCal;