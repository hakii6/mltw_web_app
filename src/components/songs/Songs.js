import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SongItem from './SongItem';
import SongPage from './SongPage';
import axios from 'axios';

class Songs extends Component{
  state = {
    songs: []
  }
  componentDidMount() {
    axios.get('http://localhost:8001/api/v0/songs')
      .then(res => {
      	this.setState({ songs: res.data });
      });
  }

  render() {
    const fields = this.state.songs
    .sort((a, b) => a.Date > b.Date ? 1 : -1)
    .map((song) => (
      <SongItem key={song.ID} song={song} />
    ));
		return (
      <Switch>
        <Route exact path="/songs">
          <div className = 'row'>
            <div className = 'col-md-1' />
            <table className = 'col-md-10 row'>
              <thead>
                <tr>

                  <th className = 'col-md-1'> </th>
                  <th className = 'col-md-5'>歌名</th>
                  <th className = 'col-md-2'>BPM</th>
                  <th className = 'col-md-2'>長度</th>
                  <th className = 'col-md-2'>類型</th>

                </tr>
              </thead>
              <tbody>
                {fields}
              </tbody>
            </table>
            <div className = 'col-md-1' />
          </div>
        </Route>
        <Route path="/songs/:ID" component={ SongPage } />
      </Switch>

      );
	}
}


export default Songs;