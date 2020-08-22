import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./Playlistmenu.css";

function Playlistmenu() {
  const { state } = useContext(DataContext);
  const { featured } = state;

  const featureList = featured?.items?.map((e) => {
    return (
      <div className="playlist-container">
        <div className="playlist-content">
          <img className="playlist-poster" src={e.images[0].url} alt="test" />
          <div className="description">
            <span key={e.id}>{e.name}</span>
            <p>{e.description}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div className="content">{featureList}</div>;
}

export default Playlistmenu;
