import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo-sidebar4.svg";
import homeIcon from "../../assets/home.svg";
import searchIcon from "../../assets/search.svg";
import libraryIcon from "../../assets/library.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="logo-icon" src={logo} alt="logo" />
      <ul className="menu-container">
        <li >
          <a className='link-container' href="#">
          <img className="menu-icon" src={homeIcon} alt="home" />
          <span className="menu-text">Home</span>
          </a>
        </li>
        <li>
        <a className='link-container' href="#">
          <img className="menu-icon" src={searchIcon} alt="home" />
          <span className="menu-text">Search</span>
          </a>
        </li>
        <li>
        <a className='link-container' href="#">
          <img className="menu-icon" src={libraryIcon} alt="home" />
          <span className="menu-text">Your Library</span>
          </a>
        </li>
        
      </ul>

      <span className='playlist-text'>PLAYLIST</span>
    </div>
  );
}

export default Sidebar;
