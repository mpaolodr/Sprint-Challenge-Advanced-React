import React from "react";
import { useToggle } from "../hooks/useToggle";

const PlayerCard = ({ player }) => {
  const [toggleVal, setToggleVal] = useToggle("display", "player-card");

  return (
    <div className={toggleVal ? `player-card ${toggleVal}` : "player-card"}>
      <div className="player-info">
        <h4 className="info">
          Name: <span>{player.name}</span>
        </h4>
        <h4 className="info">
          Country: <span>{player.country}</span>
        </h4>
        <h4 className="info">
          Search Interest: <span>{player.searches}</span>
        </h4>
      </div>
      <div className="toggle-container">
        <div
          className={toggleVal ? `toggle-circle ${toggleVal}` : "toggle-circle"}
          onClick={setToggleVal}
        ></div>
      </div>
    </div>
  );
};

export default PlayerCard;
