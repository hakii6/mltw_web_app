import React, { Component } from 'react';

class GachaItem extends Component{

  render() {
		return (
      <div className='row'>
        <div className='col-md-1' />
        <div className='col-md-10'>
          <table>
            <thead>
              <tr className='row'>
                <th className='col-md-6'>{ this.props.gacha.name_tw }</th>
                <th className='col-md-6'>{ this.props.gacha.start_date } ~ { this.props.gacha.end_date }</th>
              </tr>
            </thead>
            <tbody>
              <tr className='row'>
                <td height='200'>
                  <img src={ this.props.gacha.image } width ='420px' />
                </td>

                <td >
                  <b>{ this.props.gacha.cards.map((card) => (
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


export default GachaItem;