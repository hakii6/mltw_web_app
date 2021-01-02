import React, { Component } from 'react';
import axios from 'axios';

import env from '../env';

class SongPage extends Component{
  constructor(props) {
    super(props);
    this.params = this.props.match.params;
    this.state = {
      song: [],
    };
  }
  componentDidMount() {
    axios.get(env.api + 'v0/songs/' + this.params.ID )
      .then(res => {
        this.setState({ song: res.data });
        console.log(this.state.song);
      });
  }
  render() {
  		return (
      <div>
        <div className = 'row'>

          <div className = 'col-sm-1'/>
            <div className ='col-sm-5'>
                <img src={ this.state.song.Image } width ='280' />
            </div>

            <div className = 'col-sm-6'>
              <div className ='_table'>
              <div className ="_tr">
                <div className ="_td status_box">曲名</div>
                <div className ="_td">&nbsp{ this.state.song.NameTW }</div>
              </div>

              <hr className ='space' />

              <div className ="_tr">
                <div className ="_td status_box">類型</div>
                <div className ="_td">&nbsp{ this.state.song.Type }</div>
              </div>

              <hr className ='space' />

              <div className ="_tr">
                <div className ="_td status_box">BPM</div>
                <div className ="_td">&nbsp{ this.state.song.BPM }</div>
              </div>

              <hr className ='space' />

              <div className ="_tr">
                <div className ="_td status_box">長度</div>
                <div className ="_td">&nbsp{ this.state.song.Length }</div>
              </div>

              <hr className ='space' />

              <div className ="_tr">
                <div className ="_td status_box">實裝日期</div>
                <div className ="_td">&nbsp{ this.state.song.Date }</div>
              </div>

              <hr className ='space' />

              <div className ="_tr">
                <div className ="_td status_box">日版曲名</div>
                <div className ="_td">
                  <a href={'http://imasml-theater-wiki.gamerch.com/' + this.state.song.NameJP } >
                  { this.state.song.NameJP }
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <hr/>

        <table>
          <tr>
            <th className ='toumei_list'></th>
            <th className ='toumei'>2M</th>
            <th className ='toumei'>2M+</th>
            <th className ='toumei'>4M</th>
            <th className ='toumei'>6M</th>
            <th className ='toumei'>MM</th>
          </tr>

          <tr>

          <td className ='toumei_list'>難度</td>
            <td className ='toumei'>{ this.state.song.EzLv }</td>
            <td className ='toumei'>{ this.state.song.Hr2Lv}</td>
            <td className ='toumei'>{ this.state.song.NmLv }</td>
            <td className ='toumei'>{ this.state.song.HrLv }</td>
            <td className ='toumei'>{ this.state.song.ExLv }</td>
          </tr>

          <tr>

          <td className ='toumei_list'>notes</td>
          <td className ='toumei'>{ this.state.song.EzNotes }</td>
          <td className ='toumei'>{ this.state.song.Hr2Notes}</td>
          <td className ='toumei'>{ this.state.song.NmNotes }</td>
          <td className ='toumei'>{ this.state.song.HrNotes }</td>
          <td className ='toumei'>{ this.state.song.ExNotes }</td>

          </tr>

          <tr>

          <td className ='toumei_list'>圖譜</td>


          </tr>
        </table>

        <hr/>
      </div>

		);
	}
}


export default SongPage;