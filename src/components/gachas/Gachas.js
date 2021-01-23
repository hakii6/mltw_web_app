import React, { useState, useEffect } from 'react';
import GachaItem from './GachaItem';
import axios from 'axios';

import env from '../env';

function Gachas() {

  const [year, setYear] = useState(new Date().getFullYear());
  const [years, setYears] = useState(initYears);
  const [gachas, setGachas] = useState([]);

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
      const result = await axios(env.api + 'v1/gachas?year=' + year);
      if (!ignore) setGachas(result.data.sort((a, b) => a.StartDate > b.StartDate ? 1 : -1));
    }
    fetchData();
    return () => { ignore = true;}
  }, [year]);
  
  return (
    <div>
      {years.map((y) => <button key={y} type="button" className="btn btn-primary" onClick={() => setYear(y)}>{y}</button>)}
      <br/>
      {gachas.map((gacha) => <GachaItem key={gacha.ID} gacha={gacha} />)}
      <br/>
      <br/>
    </div>

  );
}

export default Gachas;