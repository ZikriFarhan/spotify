import React from "react";
import { useState, useEffect } from "react";
import { ButtonLogin } from "../button";
import { AlbumName, ButtonSelect } from "..";
import { NavLink } from "react-router-dom";
import CreatePlaylist from "../pages/CreatePlaylist";
import { TrekAlbum } from "../trek";
import "../../App.css";

// data = Array.from(data)
function Albums() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [selected, setSelected] = useState("");

  const [token] = useState(
    window.location.hash
      .substring(1, window.location.hash.length - 1)
      .split("&")[0]
      .split("=")[1]
  );

  const handleSelect = (uri) => {
    setSelected([...selected, uri]);
  };

  const handleDelete = (uri) => {
    setSelected(selected.filter((item) => item !== uri));
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const getDataAndRender = async (e) => {
    e.preventDefault();
    const data = await fetch(
      `https://api.spotify.com/v1/search?q=${name}&type=track`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => response.json());
    // .then((data) => console.log(data.albums.items));

    setData(data.tracks.items);
  };
  console.log(data);

  return (
    <div className="wrapper">
      <ButtonLogin />
      <div className="container">
        <form onSubmit={getDataAndRender}>
          <input
            type="text"
            placeholder="Search by album/track"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div className="crt-playlist">
          <NavLink to="/createplaylist">
            <button onClick={() => <CreatePlaylist token={undefined} />}>
              Create Playlist
            </button>
          </NavLink>
        </div>
        <h1>Now Playing</h1>
        <div className="card">
          {data &&
            data.map((v, index) => {
              return (
                <>
                  <div className="card-list">
                    <div className="container-playlist">
                      <img src={v.album.images[0].url} alt="" />
                      <h4 id="title">
                        <b>{v.album_type}</b>
                      </h4>
                      <AlbumName
                        name={v.name}
                        artist={v.artists[0].name}
                        songTitle={v.type}
                      ></AlbumName>

                      <div className="button-select">
                        {selected.includes(v.uri) ? (
                          <button
                            className="selected"
                            onClick={() => handleDelete(v.uri)}
                          >
                            Selected
                          </button>
                        ) : (
                          <button
                            className="select"
                            onClick={() => handleSelect(v.uri)}
                          >
                            Select
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* <ButtonSelect /> */}
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Albums;
