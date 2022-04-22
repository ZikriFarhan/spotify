import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeToken } from "./reducer/slicer";
import { useDispatch } from "react-redux";
import "./Home.css";
import CreatePlaylist from "./CreatePlaylist";
import WebApp from "../implctgrant/App";
import Albums from "../component/Album";

function Home() {
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();
  const validToken = () => {
    if (token) {
      return true;
    }
  };

  return (
    <div className="wrapper">
      {validToken() ? (
        <div className="home">
          <div className="right-container">
            <NavLink to="/dashboard">
              <div className="menu-box">
                <p>Home</p>
              </div>
            </NavLink>
            <NavLink to="/createplaylist">
              <div className="menu-box">
                <p>Create Playlist</p>
              </div>
            </NavLink>
            <div className="logout">
              <NavLink to="/">
                <p onClick={() => dispatch(removeToken())}>Log out</p>
              </NavLink>
            </div>
          </div>
          <div className="main-container">
            <Routes>
              {/* <Route path="/dashboard" element={<Home />} /> */}
              <Route path="/dashboard" element={<Albums />} />
              <Route path="/createplaylist" element={<CreatePlaylist />} />
            </Routes>
          </div>
        </div>
      ) : (
        <WebApp />
      )}
      )
    </div>
  );
}

export default Home;
