import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Data from "./components/data";
import {AlbumImage, AlbumDesc, AlbumName, ButtonSelect,} from "./components/index.js";


// export default Button;



function App() {
  const [data, setData] = useState({});
  useEffect(()=>{
    const getDataAndRender = async () => {

  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
    );
    if (!response.ok) throw new Error("Error");
    const data1 = await response.json();
    console.log("using async", data1);
    setData(data1);
  } catch (error) {
    console.log(error);
    alert(error);
  }

};
getDataAndRender();
  },[]);

  if(data.album === undefined){
    return <h1>loading</h1>
  };

  return (    
    
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <div className="bungkus">
            <h1>Now Playing</h1>

            <div className="card-list">
              <div className="card">
                <div className="container-playlist">
                  <AlbumImage src={data.album.images[0].url}/>
                  <h4 id="title">
                    <b></b>
                  </h4>
                  <AlbumName name={data.album.name} artist={data.artists.name}
                  singer={data.album.artists[0].name}></AlbumName>                
                </div>
                <ButtonSelect/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default App;
