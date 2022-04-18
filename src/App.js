import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Data from "./components/data/data";
import ObjectLoop from "./components/trek";
import { Routes, Route } from "react-router-dom";
import WebApp from "./components/implctgrant/App";
import CreatePlaylist from "./components/pages/CreatePlaylist";
import Albums from "./components/component/Album";
import { useDispatch } from "react-redux";
import { Router, Navigate } from "react-router-dom";
import Auth from "./components/implctgrant/Auth";
import { useSelector } from "react-redux";

// export default Button;

// Instantiate Spotify API wrapper
// let spotifyApi = new SpotifyWebApi();
// let spotifyToken = window.localStorage.getItem("token");
// if (spotifyToken) {
//   spotifyApi.setAccessToken(spotifyToken);
// }

function App() {
  //setting auth 2
  const token = useSelector((state) => state.token.token);
  // const dispatch = useDispatch();
  const ValidToken = () => {
    if (token) {
      return true;
    }
  };

  console.log(token);
  //   let accessToken = window.location.hash
  //     .substring(1, window.location.hash.length - 1)
  //     .split("&")[0]
  //     .split("=")[1];

  //   if (accessToken) {
  //     dispatch(setToken(accessToken));
  //   }

  //   isValidToken = () => {
  //     if (this.props.state.token) {
  //       return true;
  //     }
  //   };
  // }

  //setting auth 1
  //   class App extends Component {
  //     componentDidMount() {
  //       const hash = window.location.hash
  //         .substring(1)
  //         .split("&")
  //         .reduce(function (initial, item) {
  //           if (item) {
  //             var parts = item.split("=");
  //             initial[parts[0]] = decodeURIComponent(parts[1]);
  //           }
  //           return initial;
  //         }, {});
  //       let foundToken = hash.access_token;
  //       if (foundToken) {
  //         this.props.setToken(foundToken);
  //       }
  //     }
  //   }

  //   render();
  //   {
  //     return (
  //       <>
  //         <Router>
  //           <Routes>
  //             <Route path="/" element={<WebApp />} />
  //             <Route
  //               path="/dashboard"
  //               element={
  //                 this.isValidToken() ? (
  //                   <Albums token={this.props.token} />
  //                 ) : (
  //                   <Navigate replace to="/" />
  //                 )
  //               }
  //             />
  //             <Route
  //               path="/createplaylist"
  //               element={
  //                 this.isValidToken() ? (
  //                   <CreatePlaylist token={this.props.token} />
  //                 ) : (
  //                   <Navigate replace to="/" />
  //                 )
  //               }
  //             />
  //             <Route path="*" element={<Auth />} />
  //           </Routes>
  //         </Router>
  //       </>
  //     );
  //   }
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
      {ValidToken() ? (
        <div className="container">
          <p>Berhasil login</p>
          <Routes>
            <Route path="/" element={<WebApp />} />
            <Route path="/dashboard" element={<Albums />} />
            <Route path="/createplaylist" element={<CreatePlaylist />} />
            <Route path="*" element={<Auth />} />
          </Routes>
        </div>
      ) : (
        <WebApp />
      )}
    </div>
  );
}

export default App;
