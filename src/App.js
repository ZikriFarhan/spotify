import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Data from "./components/data/data";
import {AlbumImage, AlbumDesc, AlbumName, ButtonSelect,} from "./components/index.js";
import ObjectLoop from "./components/trek";

// export default Button;



function App() {

  return (    
    
    <div className="App">
      <ObjectLoop/>
    </div>
  
  );
}

export default App;
