import React, {useState} from "react";
import "./styles/app.scss";
import Player from "./components/Player.js"
import Song from "./components/Song.js"
import data from "./data.js"


function App() {
    //States
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="App">
            <Song currentSong={currentSong} />
            <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
        </div>
    );
}

export default App;
