import React from 'react';

const SelectedSong = props => {
  return(
    <ul>
      <li>Name: {props.data.name}</li>
      <li>Artist: {props.data.artist}</li>
      <li>Album: {props.data.album}</li>
    </ul>
  );
};

export default SelectedSong;
