import React, { Component } from 'react';
import SongItem from './SongItem';
import axios from 'axios';

class Songs extends Component{
  state = {
    songs: []
  }
  componentDidMount() {
    axios.get('http://localhost/mltd/public/api/v1/songs')
      .then(res => {
      	this.setState({ songs: res.data });
      	console.log('a');
      });
  }

  render() {
    const fields = this.state.songs.map((song) => (
      <SongItem key={song.id} song={song} />
    ));
		return (
      <table className = 'row'>
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

      );
	}
}


export default Songs;