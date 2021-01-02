import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SongItem extends Component{

  render() {
		return (
      <tr>

        <td>
          <Link to={ "/songs/" + this.props.song.ID }>
            <img className = "thumbnail" src={ this.props.song.Image } width ='280' />
          </Link>
        </td>
        <td>              
          <Link to={ "/songs/" + this.props.song.ID }>
            { this.props.song.NameTW }
          </Link>
        </td>
        <td>{ this.props.song.BPM }</td>
        <td>{ this.props.song.Length.substring(3 , 8) }</td>
        <td>{ this.props.song.Type }</td>

      </tr>
		);
	}
}


export default SongItem;