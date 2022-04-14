import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Data from "./components/data/data";
import {
  AlbumImage,
  AlbumDesc,
  AlbumName,
  ButtonSelect,
} from "./components/index.js";
import ObjectLoop from "./components/trek";
import { Routes, Route } from "react-router-dom";
import WebApp from "./components/implctgrant/App";
import CreatePlaylist from "./components/pages/CreatePlaylist";
import Albums from "./components/component/Album";
import { useDispatch } from "react-redux";
import { setToken } from "./components/pages/reducer/slicer";
import { connect } from "react-redux";
// export default Button;

// Instantiate Spotify API wrapper
// let spotifyApi = new SpotifyWebApi();
// let spotifyToken = window.localStorage.getItem("token");
// if (spotifyToken) {
//   spotifyApi.setAccessToken(spotifyToken);
// }

function App() {
  //setting auth 2
  // const dispatch = useDispatch();

  // let accessToken = window.location.hash
  //   .substring(1, window.location.hash.length - 1)
  //   .split("&")[0]
  //   .split("=")[1];

  // if (accessToken) {
  //   dispatch(setToken(accessToken));
  // }

  //setting auth 1
  // class App extends Component {
  //   componentDidMount() {
  //     const hash = window.location.hash
  //       .substring(1)
  //       .split("&")
  //       .reduce(function (initial, item) {
  //         if (item) {
  //           var parts = item.split("=");
  //           initial[parts[0]] = decodeURIComponent(parts[1]);
  //         }
  //         return initial;
  //       }, {});
  //     let foundToken = hash.access_token;
  //     if (foundToken) {
  //       this.props.setToken(foundToken);
  //     }
  //   }

  //   isValidToken = () => {
  //     if (this.props.state.token) {
  //       return true;
  //     }
  //   };

  //   render() {
  //   return (
  //     <>
  //     <Router>
  //       <Routes>
  //       <Route  path="/" element={<WebApp/>} />
  //       <Route  path="/dashboard" element={this.isValidToken() ? <Albums token={this.props.token}/> : <Navigate replace to ="/" />}/>
  //       <Route  path="/createplaylist" element={this.isValidToken() ? <CreatePlaylist token={this.props.token}/> : <Navigate replace to ="/" />} />
  //       <Route  path="*" element={<Auth/>} />
  //       </Routes>
  //     </Router>
  //     </>
  //   );
  // }
  // }

  // const mapStateToProps = (state) => {
  //   return {
  //     state,
  //   };
  // };

  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     setToken: (tokenText) =>
  //       dispatch({ type: "SET_TOKEN", payload: tokenText }),
  //   };
  // };

  // export default connect(mapStateToProps, mapDispatchToProps)(App);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebApp />}></Route>
        <Route path="/dashboard" element={<Albums />}></Route>
        <Route path="/createplaylist" element={<CreatePlaylist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
