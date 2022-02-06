import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";

const Player = () => {
    return (
      <div className="player">
        <div className="time-control">
            <p>Start Time</p>
            <input type="range" />
            <p>End Time</p>
        </div>
        <div class="play-control">
            <FontAwesomeIcon className="previous" icon={faStepBackward} size="3x"/>
            <FontAwesomeIcon className="play" icon={faPlay} size="3x" />
            <FontAwesomeIcon className="next" icon={faStepForward} size="3x" />
        </div>
      </div>  
    )
}

export default Player;
