import React from "react";

//components
import PlayerCard from "./PlayerCard";

const Players = ({ data }) => {
  return (
    <div className="players-container">
      {data.map(player => {
        return <PlayerCard player={player} key={player.id} />;
      })}
    </div>
  );
};

export default Players;
