import React, { useContext } from "react";
import "./Playlist.css";
import { DataContext } from "../../context/DataContext";

function Playlist() {
  const { state } = useContext(DataContext);
  const { playlists } = state;

  const listPlaylist = playlists?.items?.map((playlist) => {
    return <span key={playlist.id}>{playlist.name}</span>;
  });
  return <div className="playlist">{listPlaylist}</div>;
}

export default Playlist;
