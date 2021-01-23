import React, { useState, useEffect } from 'react';
import EventItem from './EventItem';
import axios from 'axios';

import env from '../env';

function Events() {

  const [year, setYear] = useState(new Date().getFullYear());
  const [years, setYears] = useState(initYears);
  const [events, setEvents] = useState([]);

  function initYears() {
    var tmp = [];
    for (var i = 2019; i < new Date().getFullYear() + 2; i++) {
      tmp.push(i);
    }
    return tmp;
  }
  useEffect(() => {

    let ignore = false;

    async function fetchData() {
      const result = await axios(env.api + 'v1/events?year=' + year);
      if (!ignore) setEvents(result.data.sort((a, b) => a.StartDate > b.StartDate ? 1 : -1));
    }
    fetchData();
    return () => { ignore = true;}
  }, [year]);
  
	return (
    <div>
      {years.map((y) => <button key={y} type="button" className="btn btn-primary" onClick={() => setYear(y)}>{y}</button>)}
      <br/>
      {events.map((event) => <EventItem key={event.ID} event={event} />)}
      <br/>
      <br/>
    </div>

  );
	// }
}

export default Events;