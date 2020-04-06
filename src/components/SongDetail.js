import React from 'react';

const SongDetail = (props) => {
  return (
    <div>
    <h3> {props.chartPosition}: {props.song['im:name']['label']} </h3>
    <p> Artist: {props.song['im:artist']['label']} </p>
    <div className='audio-container'>
   <audio controls><source src={props.song['link'][1]['attributes']['href']} type="audio/mpeg"></source></audio>
   </div>

    </div>
  )
}

export default SongDetail;
