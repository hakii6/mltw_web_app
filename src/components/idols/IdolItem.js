import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IdolItem extends Component{

  render() {
		return (
        <div className='col-md-2'>
          <Link to={ "/idols/" + this.props.idol.id }>
          { this.props.idol.NameTW }</Link>
          <img src={ this.props.idol.Thumbnail } width='150px'/>
          <br/>
        </div>
        
		);
	}
}


export default IdolItem;