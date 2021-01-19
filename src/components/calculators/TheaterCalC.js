import React, { Component } from 'react';
import jsonfile from './theater.json';

class TheaterCalC extends Component{
  constructor(props) {
    super(props);
    this.state = {
      point: 0,
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
    const ans = jsonfile[this.state.point];

    this.setState({
      count_MM: ans["MM"],
      count_6M: ans["6M"],
      count_4M: ans["4M"],
      count_2M2: ans["2M+"],
      count_2M: ans["2M"],
    });
    event.preventDefault();
  }
  render() {

    // console.log(pt)

		return (
      <div>
        <div className="row">
          <div className="col-md-8">
            請至少＞＝五百分，否則有可能算不出結果<br/>
            請至少＞＝五百分，否則有可能算不出結果<br/>
            請至少＞＝五百分，否則有可能算不出結果<br/>
            <form onSubmit={this.handleSubmit}>
              <label>
                距離理想分數(500~1500)：
                <input type="number" name="point" value={this.state.point} onChange={this.handleInputChange} min="0" max="1500"/>
              </label><br/>
              <input type="submit" value="計算" />

            </form>
          </div>
          <div className="col-md-4">
            <br/>
            <table>
              <tr>
                <td>演唱會難度</td>
                <td>獲得分數</td>
              </tr>
              <tr>
                <td>2M</td>
                <td>35</td>
              </tr>
              <tr>
                <td>2M+</td>
                <td>62</td>
              </tr>
              <tr>
                <td>4M</td>
                <td>49</td>
              </tr>
              <tr>
                <td>6M</td>
                <td>64</td>
              </tr>
              <tr>
                <td>MM</td>
                <td>85</td>
              </tr>

            </table>
          </div>
        </div>

        <hr/>
        <div>
          <div>請務必自己驗算一下</div>
          <div>MM： {this.state.count_MM} 場</div>
          <div>6M： {this.state.count_6M} 場</div>
          <div>2M+：{this.state.count_2M2}場</div>
          <div>4M： {this.state.count_4M} 場</div>
          <div>2M： {this.state.count_2M} 場</div>
        </div>
      </div>
		);
	}
}


export default TheaterCalC;