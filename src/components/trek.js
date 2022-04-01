import React from "react";
import "../App.css";
import data from "../components/data/data";
import {
  AlbumImage,
  AlbumDesc,
  AlbumName,
  ButtonSelect,
} from "../components/index.js";

const TrekAlbum = ({ name, album, images, songTitle, artist }) => (
  <div className="wrapper">
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

const ObjectLoop = () => {
  return (
    <div className="table-of-tracks">
      {data.map((data, idx) => {
        const {
          album: {
            images: [{ url: src }],
            name,
          },
          artists: [{ name: artist }],
          name: song,
        } = data;

        return (
          <TrekAlbum key={idx} album={name} images={src} songTitle={song} />
        );
      })}
      ;
    </div>
  );
};

export default ObjectLoop;
