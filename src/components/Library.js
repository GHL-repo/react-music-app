import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({songs, setCurrentSong, currentSong, libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? "active-library" : "library" }`}>
            <h2>Library</h2>
            <div class="library-songs">
                {songs.map((song) => ( 
                    <LibrarySong 
                        song={song} 
                        setCurrentSong={setCurrentSong}
                        currentSong={currentSong}
                        songs={songs} 
                        id={song.id}
                        key={song.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library;
