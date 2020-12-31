import React, { Component } from 'react';

class SongItem extends Component{

  render() {
		return (
      <tr>

        <td><img className = "thumbnail" src = { this.props.song.image } /></td>
        <td>{ this.props.song.name_tw }</td>
        <td>{ this.props.song.BPM }</td>
        <td>{ this.props.song.length.substring(3 , 8) }</td>
        <td>{ this.props.song.type }</td>

      </tr>
		);
	}
}


export default SongItem;