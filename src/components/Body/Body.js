import React, { useContext } from "react";
import "./Body.css";
import Playlistmenu from "../../components/Playlist-menu/Playlistmenu";
import { DataContext } from "../../context/DataContext";

function Body() {
    const {state} = useContext(DataContext)

  return (
    <div className="body">
      
       <Playlistmenu/>
       
      
    </div>
  );
}

export default Body;
