import React from "react";
import ScoreBoard from "../Scoreboard/Scoreboard";
import Team from "../Team/Team";

function Game(props) {
  return (
    <div className="Game">
      <Team />
      <ScoreBoard />
    </div>
  );
}

export default Game;
