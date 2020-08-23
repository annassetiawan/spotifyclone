import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./Playlistmenu.css";

function Playlistmenu() {
  const { state } = useContext(DataContext);
  const { featured, newrelease, featuredMessage } = state;

  const featureList = featured?.items?.map((e) => {
    return (
      <div className="playlist-container">
        <div className="playlist-content">
          <img className="playlist-poster" src={e.images[0].url} alt="test" />
          <div className="description">
            <span key={e.id}>
              {e.name.length > 15 ? e.name.slice(0, 12) + "..." : e.name}
            </span>
            <p>{e.description}</p>
          </div>
        </div>
      </div>
    );
  });

  const newReleaseList = newrelease?.albums?.items?.map((e) => {
    return (
      <div className="playlist-container">
        <div className="playlist-content">
          <img className="playlist-poster" src={e.images[0].url} alt="test" />
          <div className="description">
            <span key={e.id}>
              {e.name.length > 15 ? e.name.slice(0, 12) + "..." : e.name}
            </span>
            <p>{e.artists[0].name}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="playlistMenu">
      <div className="featured">
        <div className="content-title">
          <h2>Featured</h2>
          <span>see all</span>
        </div>
        <div className="content-message">
          <p>{featuredMessage}</p>
        </div>
        <div className="content">{featureList}</div>
      </div>

      <div className="newrelease">
        <div className="content-title">
          <h2>New Release</h2>
          <span>see all</span>
        </div>
        <div className="content">{newReleaseList}</div>
      </div>
    </div>
  );
}

export default Playlistmenu;
