import React from 'react';
import Song from './Song';

const SongList = props => {

  let songs = props.data.map(song=>{
  let songName = song.name

    if(props.selectedSongId === song.id){
      songName= "*" + songName;
    }

    return(
      <Song
        key={song.id}
        handleButtonClick={props.handleButtonClick}
        name={songName}
        />
      );
    });
      return(
        <ul>
          {songs}
        </ul>
    );
  };

export default SongList;
