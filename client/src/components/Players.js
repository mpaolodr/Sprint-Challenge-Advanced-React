import React from "react";
import { useToggle } from "../hooks/useToggle";

//components
import PlayerCard from "./PlayerCard";

const Players = ({ data }) => {
  const [toggleVal, setToggleVal] = useToggle(
    "main-container",
    "players-container"
  );
  return (
    <div className="players-container" data-testid="players-container">
      {data.map(player => {
        return (
          <PlayerCard
            player={player}
            key={player.id}
            data-testid="ind-player"
          />
        );
      })}
      <div
        className={
          toggleVal ? `toggle-container ${toggleVal}` : "toggle-container"
        }
        data-testid="players-container-toggle"
      >
        <div
          className={toggleVal ? `toggle-circle ${toggleVal}` : "toggle-circle"}
          onClick={setToggleVal}
        ></div>
      </div>
    </div>
  );
};

export default Players;
