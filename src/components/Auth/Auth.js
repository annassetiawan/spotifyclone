import React, { useEffect, useContext } from "react";
import Login from "../Login/Login";
import { getTokenFromResponse } from "../Spotify/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import {  DataContext } from "../../context/DataContext";
import Menu from "../Menu/Menu";


const spotify = new SpotifyWebApi();

function Auth() {
  const {state,dispatch} = useContext(DataContext);
  const { token,user,playlists,featured,currentplay,newrelease} = state

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((response) => {
        dispatch({
          type: "SET_USER",
          user: response,
        });
      });

      spotify.getUserPlaylists().then((response) =>{
        dispatch({
          type: "GET_PLAYLIST",
          playlists: response,
        });
      })
      spotify.getMyCurrentPlayingTrack().then((response) =>{
        dispatch({
          type: "GET_CURRENTPLAY",
          currentplay: response,
        });
      })
      spotify.getNewReleases({limit:6}).then((response) =>{
        dispatch({
          type: "GET_NEWRELEASE",
          newrelease: response,
        });
      })

      spotify.getFeaturedPlaylists({limit:6,country:"ID",locale:"id_ID"}).then((response) =>{
        dispatch({
          type: "GET_FEATURED",
          featured: response,
        });
      })
    }

    console.log('user', user);
  console.log('playlists', playlists);
  console.log('featured', featured);
  console.log('currentplay', currentplay);
  console.log('newrelease', newrelease);

  console.log('token',token);

  },[state,dispatch]);

  

  const loggedIn = token ? (<Menu/>) : (<Login />);

  return <div className="App">{loggedIn}</div>;
}

export default Auth;

