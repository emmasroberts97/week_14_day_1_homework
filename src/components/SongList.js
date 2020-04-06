import React, { Component } from 'react';
import SongDetail from './SongDetail.js';

class SongList extends Component {
  render(){
    const topSongs = this.props.songs.map(song => {
      let chartPosition = this.props.songs.indexOf(song) + 1;
      return <SongDetail song={song} key={song['id']['attributes']['im:id']} chartPosition={chartPosition}></SongDetail>
    });

    return(
       <div className="song-list">
        {topSongs}
       </div>
     );
  }
}

export default SongList;
