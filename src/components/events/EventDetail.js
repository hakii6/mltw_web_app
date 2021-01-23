import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import axios from 'axios';

import env from '../env';

function EventDetail(props) {

  const [eventScores, setEventScores] = useState(null);

  useEffect(() => {

    let ignore = false;

    async function fetchData() {
      const result = await axios("https://api.matsurihi.me/mltd/v1/events/" + props.EventDetail.Api_ID + "/rankings/borderPoints");
      if (!ignore) {
        setEventScores(result.data);
      }
    }
    fetchData();

    return () => { ignore = true;}
  }, []);

	return (
    <tr className='row'>
      <td colSpan="2">
        { eventScores !== null && 
        <>資料來自於<a href="https://api.matsurihi.me/docs/">api.matsurihi.me</a>
          <table>
            <tr>
              <th colSpan="2">累積分數排行榜</th>
            </tr>
            <tr>
              <td>名次</td>
              <td>分數</td>
            </tr>
            {eventScores.eventPoint.scores.map((ep, key) =>
            <tr>
              <td>{ep.rank}</td>
              <td>{ep.score}</td>
            </tr>
            )}
          </table>
          <table>
            <tr>
              <th colSpan="2">高分排行榜</th>
            </tr>
            <tr>
              <td>名次</td>
              <td>分數</td>
            </tr>
            {eventScores.highScore.scores.map((hs, key) =>
            <tr>
              <td>{hs.rank}</td>
              <td>{hs.score}</td>
            </tr>
            )}
          </table>
          <table>
            <tr>
              <th colSpan="2">社交圈總分排行榜</th>
            </tr>
            <tr>
              <td>名次</td>
              <td>分數</td>
            </tr>
            {eventScores.loungePoint.scores.map((lp, key) =>
            <tr>
              <td>{lp.rank}</td>
              <td>{lp.score}</td>
            </tr>
            )}
          </table>
        </>
        }
      </td>
    </tr>
  );
}


export default EventDetail;