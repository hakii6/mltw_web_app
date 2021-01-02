import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';

class GachaItem extends Component{

  render() {
    let fields;
    if (this.props.gacha.Cards) {
      fields = this.props.gacha.Cards.map((Card) => (
                <Link to={ "/cards/" + Card.ID }><b>{ Card.NameTW }</b><br/></Link>
                ));
    }
    return (
      <div className='row'>
        <div className='col-md-1' />
        <div className='col-md-10'>
          <table>
            <thead>
              <tr className='row'>
                <th className='col-md-6'>{ this.props.gacha.NameTW }</th>
                <th className='col-md-6'>
                  { Moment(this.props.gacha.StartDate).format('YYYY-MM-DD') } ~ 
                  { Moment(this.props.gacha.EndDate).format('YYYY-MM-DD') }
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='row'>
                <td height='200'>
                  <img src={ this.props.gacha.Image } width ='420px' />
                </td>

                <td >
                  <b>{ fields }
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
          <br/><br/><br/><br/>
        </div>
        <div className='col-md-1' />
        
      </div>
    );
	}
}


export default GachaItem;