import React from 'react'

const Playlist = props => {
  let liClass = '';
  if(props.id === props.selectedPlaylistId){
    liClass = "selected";
  }
  return(
    <li className={liClass}>{ props.name }</li>
  );
};

export default Playlist
