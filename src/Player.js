import {players} from './players.js'

export default function Player() {
  return (
    <>
    <div className='player-card'>
      <h1> {players[0].name} </h1>
      <h2> {players[0].team} </h2>
      <h3> {players[0].nationality} </h3>
      <h3> {players[0].jerseyNumber} </h3>
      <h2> {players[0].age} </h2>
      <img src={players[0].image} alt="Christiano Ronaldo"/>
    </div>
    </>
  )
}
