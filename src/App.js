import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
// import Button from "./components/button";


const Button = () => {
  return <button>Select</button>;
};

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

  return (
  <body>
      
    
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <div className="bungkus">
            <h1>Now Playing</h1>

            <div className="card-list">
              <div className="card">
                <div className="container-playlist">
                  <img id="images" alt="Avatar" src={data.album.images[0].url} style={{width:"50%"}} />
                  <h4 id="title">
                    <b></b>
                  </h4>
                  <p>{data.name}</p>
                  <p>{data.album.artists[0].name}</p>                 
                </div>
                <Button/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  );
}

export default App;
