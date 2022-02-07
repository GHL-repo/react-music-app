import React, {useState, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
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
        };
    };
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration});
    };
    const getTime = (time) => {
        //Return time in human readable form 
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };
    const dragHandler = (e) => {
        //console.log(e.target.value);
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    };

    //State
    const [songInfo, setSongInfo] = useState ({
        currentTime: 0,
        duration: 0,

    });
 
    return (
      <div className="player">
        <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input 
                type="range" 
                min={0} 
                max={songInfo.duration} 
                value={songInfo.currentTime} 
                onChange={dragHandler}
            />
            <p>{getTime(songInfo.duration)}</p>
        </div>
        <div class="play-control">
            <FontAwesomeIcon className="previous" icon={faStepBackward} size="3x"/>
            <FontAwesomeIcon onClick={playSongHandler} className="play" icon={faPlay} size="3x" />
            <FontAwesomeIcon className="next" icon={faStepForward} size="3x" />
        </div>
        <audio 
            onLoadedMetadata={timeUpdateHandler}
            onTimeUpdate={timeUpdateHandler}
            ref={audioRef} 
            src={currentSong.audio}>
        </audio>
      </div>  
    );
};

export default Player;
