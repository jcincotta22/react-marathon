import React from 'react';
import Playlist from './Playlist';

const PlaylistCollection = props => {

  let playlists = props.data.map(playlist=>{

    return(
      <Playlist
        key={playlist.id}
        name={playlist.name}
        songs={playlist.songs}
        selectedPlaylistId={props.selectedPlaylistId}
        id={playlist.id}
      />
    );
  });
  return(
    <ul>
      {playlists}
    </ul>
  );
};

export default PlaylistCollection;
