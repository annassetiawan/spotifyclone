import React,{useContext} from "react";
import "./Footer.css";
import musicdefault from "../../assets/musicdefault.svg";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import play from "../../assets/play.svg";
import shuffle from "../../assets/shuffle.svg";
import repeat from "../../assets/repeat.svg";
import next from "../../assets/next.svg";
import prev from "../../assets/prev.svg";
import playlist from "../../assets/playlist.svg";
import connect from "../../assets/connecteddevices.svg";
import volume from "../../assets/volume.svg";
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { DataContext } from "../../context/DataContext";

function Footer() {
    const useStyles = makeStyles({
        root: {
         width:'85px',
         height:5,
         marginLeft:'10px',
         bordeRadius:5,
        color:'#b3b3b3',
        '&:focus, &:hover, &$active': {
           color:'#1DB954',
          },
        },
      });
      const classes = useStyles();
      
      const {state} = useContext(DataContext)
      const {recentplay} = state
      console.log(recentplay?.items[0]?.track?.album?.images[2].url);
  return (
    <div className="footer">
      <div className="footer-right">
        <div className="wrapper-right">
          <img className="playlist-icon" src={playlist} alt="playlist" />
        </div>
        <div className="wrapper-right">
          <img className="connect" src={connect} alt="connect" />
        </div>
        <div className="wrapper-right">
          <img className="volume" src={volume} alt="volume" />
        </div>
       
            <Slider className={classes.root}/>
        
      </div>
      <div className="footer-center">
        <div className="wrapper">
          <img className="shuffle" src={shuffle} alt="shuffle" />
        </div>
        <div className="prev wrapper">
          <img className="prev" src={prev} alt="prev" />
        </div>
        <div className="wrapper">
          <img className="play" src={play} alt="play" />
        </div>
        <div className="next wrapper">
          <img className="next" src={next} alt="next" />
        </div>
        <div className="repeat wrapper">
          <img className="repeat" src={repeat} alt="repeat" />
        </div>
      </div>
      <div className="footer-left">
        <img src={recentplay?.items[0]?.track?.album?.images[2].url} alt="music" />
        <div className="now-playing">
          <span>{recentplay?.items[0]?.track?.artists[0]?.name} </span>
          <span>{recentplay?.items[0]?.track?.name} </span>
        </div>
        <FavoriteBorderOutlinedIcon
          className="addtofavourites"
          style={{ fontSize: "1rem" }}
        />
      </div>
    </div>
  );
}

export default Footer;
