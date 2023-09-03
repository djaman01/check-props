import Player from "./Player.js"
import {players} from "./players.js"



export default function PlayersList() {
  return (
    <div>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );  
}
