import React, {useState} from "react";
import "./styles/app.scss";
import data from "./data.js";
import Player from "./components/Player.js";
import Song from "./components/Song.js";
import Library from "./components/Library.js";

function App() {
    //States
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="App">
            <Song currentSong={currentSong} />
            <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
            <Library songs={songs} />
        </div>
    );
}


export default App;
