import React, {useState, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    //Ref Hooks
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

    const autoPlayHandler = () => {
        if (isPlaying) {
            audioRef.current.play();
        }
    }

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

    const barHandler = (e) => {
        //Allows for manually updating the progress bar
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    };

    //State Hooks
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
                max={songInfo.duration || 0} 
                value={songInfo.currentTime} 
                onChange={barHandler}
            />
            <p>{getTime(songInfo.duration)}</p>
        </div>
        <div class="play-control">
            <FontAwesomeIcon className="previous" icon={faStepBackward} size="3x"/>
            <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay } size="3x" />
            <FontAwesomeIcon className="next" icon={faStepForward} size="3x" />
        </div>
        <audio 
            onLoadedData={autoPlayHandler}
            onLoadedMetadata={timeUpdateHandler}
            onTimeUpdate={timeUpdateHandler}
            ref={audioRef} 
            src={currentSong.audio}>
        </audio>
      </div>  
    );
};

export default Player;
