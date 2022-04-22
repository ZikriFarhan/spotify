import React, { useState } from "react";
import "./CreatePlaylist.css";
//menambahkan playlist
function CreatePlaylist({ token }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const create = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer BQAdcrKuu1vP_roHR4a8LAZKs70yTJZJyPv0V2ysroqVzoToKjgqUKePHe9oOlkddzqftxhtyMp5Op7Oa6qOzgD_PFugte2XW95TTEPeBNir0s269ueQMn_T7lINYMawnZ_hIfivVZufKAJa3jvEa4rGjzxvL1oHNAx41If7IR2gc02FrUxmIHkCEGy1H-o`
    );

    var raw = JSON.stringify({
      name: `${title}`,
      description: `${desc}`,
      public: "false",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://api.spotify.com/v1/users/zb1rxl14rhm4aqpy7eq180497/playlists",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  console.log(token);
  return (
    <div className="main-container">
      <div className="kotak-create">
        <div className="box-create">
          <h1>Create Playlist</h1>
          <form onSubmit={create}>
            <input
              type="text"
              placeholder="Playlist title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br></br>
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => setDesc(e.target.value)}
            />
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePlaylist;
