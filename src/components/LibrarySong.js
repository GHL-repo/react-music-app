import React from "react";

const LibrarySong = ({song, songs, setCurrentSong, currentSong, id}) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
    };
    return (
        <div 
            onClick={songSelectHandler}
            className={`library-song ${song.id === currentSong.id ? "selected" : ""} `}
        >
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>  
    );
};

export default LibrarySong;
