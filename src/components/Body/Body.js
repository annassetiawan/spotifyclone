import React from "react";
import "./Body.css";
import Playlistmenu from "../../components/Playlist-menu/Playlistmenu";

function Body() {
  return (
    <div className="body">
        <div className="content-title">
             <h2>Recently Played</h2>
             <span>see all</span>
        </div>
      <div className="content">
       <Playlistmenu/>
       <Playlistmenu/>
       <Playlistmenu/>
       <Playlistmenu/>
       <Playlistmenu/>
       <Playlistmenu/>
       
      </div>
    </div>
  );
}

export default Body;
