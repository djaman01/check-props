import {players} from './players.js'
import Player from './Player.js'

export default function PlayersList() {
  return (
    <div className='grid-container'>
      {/* On pass au player component plusieurs props qui sont les valeurs de chaque objet de l'array players */}
      {players.map(e => <Player {...e}/>)}
    </div>
  )
}
