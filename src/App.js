import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Data from "./components/data/data";
import {AlbumImage, AlbumDesc, AlbumName, ButtonSelect,} from "./components/index.js";
import ObjectLoop from "./components/trek";

// export default Button;

// Instantiate Spotify API wrapper
let spotifyApi = new SpotifyWebApi();
let spotifyToken = window.localStorage.getItem("token");
if (spotifyToken) {
  spotifyApi.setAccessToken(spotifyToken);
}

function App() {

  // const [songs, setSongs] = useState(1);
  // const [artists, setArtists] = useState(1);
  // const [albums, setAlbums] = useState(1);
  // let placeholder = "https://cover.djpunjab.com/39659/300x700/Om-Namah-Shivaya-Mohan-Kannan.jpg";
  // let updateResults = (searchString) => {
  //   // Search songs
  //   spotifyApi.searchTracks(searchString, { limit: 4, offset: 0 }).then(
  //     function(data) {
  //       console.log('Searched songs by "' + searchString + '"', data.body);
  //       window.mySongs = data.body;

  //       setSongs(data.body.tracks.items);
  //     }, function(err) {
  //       console.error(err);
  //     }
  //   );

  //   // Search artists
  //   spotifyApi.searchArtists(searchString, { limit: 4, offset: 0 }).then(
  //     function(data) {
  //       console.log('Searched artists by "' + searchString + '"', data.body);
  //       window.myArtists = data.body;

  //       setArtists(data.body.artists.items);
  //     }, function(err) {
  //       console.error(err);
  //     }
  //   );

  //   // Search albums
  //   spotifyApi.searchAlbums(searchString, { limit: 4, offset: 0 }).then(
  //     function(data) {
  //       console.log('Searched albums by "' + searchString + '"', data.body);
  //       window.myAlbums = data.body;

  //       setAlbums(data.body.albums.items);
  //     }, function(err) {
  //       console.error(err);
  //     }
  //   );
  // };

  return (    
    
    <div className="App">
      <ObjectLoop/>
    </div>
  
  );
}

export default App;
