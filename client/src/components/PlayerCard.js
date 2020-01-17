import React from "react";

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
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
    </div>
  );
};

export default PlayerCard;
