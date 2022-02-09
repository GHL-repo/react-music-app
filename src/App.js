import React, {useState} from "react";
import "./styles/app.scss";
import data from "./data.js";
import Player from "./components/Player.js";
import Song from "./components/Song.js";
import Library from "./components/Library.js";
import Nav from "./components/Nav.js";

function App() {
    //States
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [libraryStatus, setLibraryStatus] = useState(false);

    return (
        <div className="App">
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
            <Song currentSong={currentSong} />
            <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
            <Library songs={songs} setCurrentSong={setCurrentSong} currentSong={currentSong}
                     libraryStatus={libraryStatus}/>
        </div>
    );
}


export default App;
