import React, { Component } from 'react';

class EventItem extends Component{

  render() {
		return (
      <div className='row'>
        <div className='col-md-1' />
        <div className='col-md-10'>
          <table>
            <thead>
              <tr className='row'>
                <th className='col-md-6'>{ this.props.event.name_tw }</th>
                <th className='col-md-6'>{ this.props.event.start_date } ~ { this.props.event.end_date }</th>
              </tr>
            </thead>
            <tbody>
              <tr className='row'>
                <td height='200'>
                  <img src={ this.props.event.image } width ='420px' />
                </td>

                <td >
                  <b>{ this.props.event.cards.map((card) => (
                    <div>{ card.name_tw }</div>
                    )) }
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


export default EventItem;