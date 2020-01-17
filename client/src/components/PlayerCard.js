import React from "react";

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <div className="player-info">
        <h4>
          Name: <span>{player.name}</span>
        </h4>
        <h4>
          Country: <span>{player.country}</span>
        </h4>
        <h4>
          Search Interest: <span>{player.searches}</span>
        </h4>
      </div>
    </div>
  );
};

export default PlayerCard;
