import React, { useEffect } from 'react';
import json from './map.json';

function Maps() {

  useEffect(() => {
    // console.log(json);
    const canvas = document.getElementById("canvas");
    const ticks_max = json["MaxTicks"];
    const part_total = ticks_max / 480;
    const unit = canvas.width / 20;
    const pos = [unit * 3, unit * 5, unit * 7, unit * 9, unit * 11, unit * 13];
    const left_line = unit;
    const right_line = unit * 15;
    canvas.height = ticks_max / 2880 * unit + unit;
    const top_line = unit;
    const bottom_line = canvas.height - unit;
    const side_length = unit * 2;

    const ctx = canvas.getContext('2d');
    
    // ctx.beginPath();
    // ctx.arc(50, 50, 10, 0, Math.PI * 2);
    // ctx.fillStyle = 'red';
    // ctx.fill();

    console.log(part_total);
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'white';
    ctx.strokeRect(left_line, top_line, right_line - left_line, bottom_line - top_line);
    ctx.stroke();

    for (var i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'white';
      ctx.moveTo(pos[i], top_line);
      ctx.lineTo(pos[i], bottom_line);
      ctx.stroke();
    }

    for (var i = 0; i * side_length + top_line < bottom_line; i++) {
      ctx.beginPath();
      if ( i % 4 === 0 ) {
        ctx.lineWidth = 2;
      } else {
        ctx.lineWidth = 1;
      }
      ctx.strokeStyle = 'white';
      ctx.moveTo(left_line, top_line + side_length * i);
      ctx.lineTo(right_line, top_line + side_length * i);
      ctx.stroke();
    }
    // ctx.beginPath();
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = 'white';
    // ctx.strokeRect(pos[1], unit, canvas.width - unit * 2, canvas.height - unit * 2);
    // ctx.stroke();

    const notes = json["Notes"];
    notes.forEach(note => {
      ctx.beginPath();
      console.log(note["Ticks"] / 480);
      ctx.arc(pos[note["EndX"]], bottom_line - (note["Ticks"] / 2880 * side_length), 7 + note["Size"] * 3, 0, Math.PI * 2);
      ctx.fillStyle = 'red';
      ctx.fill();
    });
  });

	return (
    <div >
      <canvas id="canvas"></canvas>
    </div>
    );
}

export default Maps;