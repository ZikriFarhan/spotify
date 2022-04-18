import React, { useEffect } from "react";
import Playlist from "../../App";
import { useDispatch } from "react-redux";
import { setToken } from "../pages/reducer/slicer";
// import ObjectLoop from "../trek";
// import SpotifyGetPlaylists from "./components/SpotifyGetPlaylists/SpotifyGetPlaylists";
// import "./WebApp.css";

const CLIENT_ID = "8fcafec009584d4b860fe4122703bda9"; // insert your client id here from spotify
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/dashboard";
const SCOPES = "playlist-modify-private";

/* 
http://localhost:3000/webapp#access_token=ABCqxL4Y&token_type=Bearer&expires_in=3600
*/
// const getReturnedParamsFromSpotifyAuth = (hash) => {
//   const stringAfterHashtag = hash.substring(1);
//   const paramsInUrl = stringAfterHashtag.split("&");
//   const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
//     console.log(currentValue);
//     const [key, value] = currentValue.split("=");
//     accumulater[key] = value;
//     return accumulater;
//   }, {});

//   return paramsSplitUp;
// };

const WebApp = () => {
  const dispatch = useDispatch();

  let accessToken = window.location.hash
    .substring(1, window.location.hash.length - 1)
    .split("&")[0]
    .split("=")[1];

  if (accessToken) {
    dispatch(setToken(accessToken));
  }

  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="container">
      <h1>hi</h1>
      <button onClick={handleLogin}>login to spotify</button>
      {/* <ObjectLoop /> */}
    </div>
  );
};

export default WebApp;
