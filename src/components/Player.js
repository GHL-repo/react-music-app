import React, {useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";

const Player = ( {currentSong, isPlaying, setIsPlaying} ) => {
    //Ref
    const audioRef = useRef(null);
    //Event Handlers
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause(); 
            setIsPlaying(false);
        } else {
            audioRef.current.play(); 
            setIsPlaying(true);
        }
    };
    return (
      <div className="player">
        <div className="time-control">
            <p>Start Time</p>
            <input type="range" />
            <p>End Time</p>
        </div>
        <div class="play-control">
            <FontAwesomeIcon className="previous" icon={faStepBackward} size="3x"/>
            <FontAwesomeIcon onClick={playSongHandler} className="play" icon={faPlay} size="3x" />
            <FontAwesomeIcon className="next" icon={faStepForward} size="3x" />
        </div>
        <audio ref={audioRef} src={currentSong.audio}></audio>
      </div>  
    )
}

export default Player;
