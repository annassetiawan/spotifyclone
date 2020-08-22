import React, { useContext } from "react";
import "./Body.css";
import Playlistmenu from "../../components/Playlist-menu/Playlistmenu";
import { DataContext } from "../../context/DataContext";

function Body() {
    const {state} = useContext(DataContext)
    const {featuredMessage} = state

  return (
    <div className="body">
        <div className="content-title">
             <h2>Featured</h2>
             <span>see all</span>
        </div>
        <div className="content-message">
        <p>{featuredMessage}</p>
        </div>
      
       <Playlistmenu/>
       
      
    </div>
  );
}

export default Body;
