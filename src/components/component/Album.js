import React from "react";

import { ButtonLogin } from "../button";
import { AlbumName, ButtonSelect } from "..";

const TrekAlbum = { name, album, images, songTitle, artist };
// data = Array.from(data)
function Albums() {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    // getToken()

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

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
      `https://api.spotify.com/v1/search?q=${name}&type=album`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => response.json());
    // .then((data) => console.log(data.albums.items));

    setData(data.albums.items);
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
        <div className="bungkus">
          <h1>Now Playing</h1>
          {data &&
            data.map((v, index) => {
              return (
                <>
                  <div className="card-list">
                    <div className="card">
                      <div className="container-playlist">
                        <img src={v.images[0].url} alt="" />
                        <h4 id="title">
                          <b>{v.album_type}</b>
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
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Albums;
