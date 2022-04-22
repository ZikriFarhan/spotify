// import logo from "./logo.svg";
// import "./App.css";
// import React, { useEffect, useState } from "react";
// import Data from "./components/data/data";
// import ObjectLoop from "./components/trek";
// import { Routes, Route } from "react-router-dom";
// import WebApp from "./components/implctgrant/App";
// import CreatePlaylist from "./components/pages/CreatePlaylist";
// import Albums from "./components/component/Album";
// import { useDispatch } from "react-redux";
// import { Router, Navigate } from "react-router-dom";
// import Auth from "./components/implctgrant/Auth";
// import { useSelector } from "react-redux";

// function App() {
//   //setting auth 2
//   const token = useSelector((state) => state.token.token);
//   // const dispatch = useDispatch();
//   const ValidToken = () => {
//     if (token) {
//       return true;
//     }
//   };

//   console.log(token);

//   return (
//     <div className="App">
//       {ValidToken() ? (
//         <div className="container">
//           <p>Berhasil login</p>
//           <Routes>
//             <Route path="/" element={<WebApp />} />
//             <Route path="/dashboard" element={<Albums />} />
//             <Route path="/createplaylist" element={<CreatePlaylist />} />
//             <Route path="*" element={<Auth />} />
//           </Routes>
//         </div>
//       ) : (
//         <WebApp />
//       )}
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useDispatch } from "react-redux";
import { setToken } from "./components/pages/reducer/slicer";

function App() {
  const dispatch = useDispatch();

  let accessToken = window.location.hash
    .substring(1, window.location.hash.length - 1)
    .split("&")[0]
    .split("=")[1];

  if (accessToken) {
    dispatch(setToken(accessToken));
  }

  // const validToken = () => {
  //   if (accessToken) {
  //     return true;
  //   }
  // };
  return <div className="wrapper"></div>;
}

export default App;
