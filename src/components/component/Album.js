import React from "react";

import { ButtonLogin } from "../button";
import { AlbumName, ButtonSelect } from "..";

const TrekAlbum = { name, album, images, songTitle, artist };
// data = Array.from(data)
function Albums() {
  return (
    <div className="wrapper">
      <ButtonLogin />
      <div className="container">
        <div className="bungkus">
          <h1>Now Playing</h1>

          <div className="card-list">
            <div className="card">
              <div className="container-playlist">
                <img src={images} alt="" />
                <h4 id="title">
                  <b></b>
                </h4>
                <AlbumName
                  name={name}
                  artist={album}
                  songTitle={songTitle}
                ></AlbumName>
              </div>
            </div>
          </div>
          <ButtonSelect />
        </div>
      </div>
    </div>
  );
}

export default Albums;
