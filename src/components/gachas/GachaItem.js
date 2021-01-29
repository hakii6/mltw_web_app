import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import axios from 'axios';

import env from '../env';


function GachaItem(props) {
  const [gacha, setGacha] = useState(props.gacha);
  const [open, setOpen] = useState(false);

  function handleClick(e) {
    e.preventDefault();

    // async function fetchData() {
    //   const result = await axios(env.api + 'v1/gachas/' + gacha.ID);
    //   if (!open) {
    //     setGacha(result.data);
    //   }
    //   setOpen(!open);
    // }

    // fetchData();

  }

  return (
    <div className='row'>
      <div className='col-md-1' />
      <div className='col-md-10'>
        <table>
          <thead>
            <tr className='row'>
              <th className='col-md-6'>{ gacha.NameTW }</th>
              <th className='col-md-6'>
                { Moment(gacha.StartDate).format('YYYY-MM-DD') } ~ 
                { Moment(gacha.EndDate).format('YYYY-MM-DD') }
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='row'>
              <td height='200'>
                <a href="#" onClick={handleClick}><img src={gacha.Image} width ='420px' /></a>
              </td>

              <td>
                { gacha.Cards !== null &&
                  gacha.Cards.map((Card, _) => <Link to={ "/cards/" + Card.ID }><b>{ Card.NameTW }</b><br/></Link>)
                }
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


export default GachaItem;