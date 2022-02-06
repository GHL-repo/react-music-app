import React from "react";
import "./styles/app.scss";
import Player from "./components/Player.js"
import Song from "./components/Song.js"


function App() {
  return (
    <div className="App">
       <Song />
       <Player />
    </div>
  );
}

export default App;
