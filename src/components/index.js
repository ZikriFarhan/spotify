import React from "react";
import data from "./data/data.js";

const AlbumImage = ({ src, children }) => (
  <div>
    <img
      id="images"
      alt="Avatar"
      src={data.album.images[0].url}
      style={{ width: "50%" }}
    />
    {children}
  </div>
);

const AlbumDesc = (props) => <h2>Album:{props.name}</h2>;

const AlbumName = ({ name, artist, singer, children }) => (
  <div className="AlbumName">
    <p className="title-song">{name}</p>
    <p>{artist}</p>
    <p>{singer}</p>
    {children}
  </div>
);

const ButtonSelect = (url) => <button>select</button>;

export { AlbumImage, AlbumDesc, AlbumName, ButtonSelect };
