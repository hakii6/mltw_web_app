import React, { useState, useEffect } from 'react';
import EventDetail from './EventDetail';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import axios from 'axios';

import env from '../env';

function EventItem(props) {

  const [event, setEvent] = useState(props.event);
  const [open, setOpen] = useState(false);

  function handleClick(e) {
    e.preventDefault();

    async function fetchData() {
      const result = await axios(env.api + 'v1/events/' + event.ID);
      if (!open) {
        setEvent(result.data);
      }
      setOpen(!open);
    }

    fetchData();

  }

	return (
    <div className='row'>
      <div className='col-md-1' />
      <div className='col-md-10'>
        <table>
          <thead>
            <tr className='row'>
              <th className='col-md-6'>{ event.NameTW }</th>
              <th className='col-md-6'>
                { Moment(event.StartDate).format('YYYY-MM-DD') } ~ 
                { Moment(event.EndDate).format('YYYY-MM-DD') }
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='row'>
              <td height='200'>
                <a href="#" onClick={handleClick}><img src={event.Image} width ='420px' /></a>
              </td>

              <td >
                { event.Cards !== null &&
                  event.Cards.map((Card, _) => <Link to={ "/cards/" + Card.ID }><b>{ Card.NameTW }</b><br/></Link>)
                }
              </td>
            </tr>

            {open &&
              <EventDetail key={event.Api_ID} EventDetail={event} />
            }
          </tbody>
        </table>
        <br/><br/><br/><br/>
      </div>
      <div className='col-md-1' />
      
    </div>
	);
}


export default EventItem;