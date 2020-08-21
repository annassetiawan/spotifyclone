import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo-sidebar4.svg";
import homeIcon from "../../assets/home.svg";
import searchIcon from "../../assets/search.svg";
import libraryIcon from "../../assets/library.svg";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Playlist from "../Playlist/Playlist";

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="logo-icon" src={logo} alt="logo" />
      <ul className="menu-container">
        <li>
          <a className="link-container" href="#">
            <img className="menu-icon" src={homeIcon} alt="home" />
            <span className="menu-text">Home</span>
          </a>
        </li>
        <li>
          <a className="link-container" href="#">
            <img className="menu-icon" src={searchIcon} alt="search" />
            <span className="menu-text">Search</span>
          </a>
        </li>
        <li>
          <a className="link-container" href="#">
            <img className="menu-icon" src={libraryIcon} alt="library" />
            <span className="menu-text">Your Library</span>
          </a>
        </li>
      </ul>

      <h1 className="playlist-text">playlist</h1>

      

      <a className="link-container" href="#">
        <FavoriteBorderOutlinedIcon className="menu-icon" alt='liked'/>
        <span className="menu-text">Liked Songs</span>
      </a>

      <hr className="divider"></hr>

      <Playlist/>
    </div>
  );
}

export default Sidebar;
