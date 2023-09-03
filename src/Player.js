
export default function Player(name, team, nationality, jerseyNumber, age, image) {
  return (
    <>
      <div className='player-card'>
        <div className="title">
          <h1>Player Card</h1>
        </div>
        <div className='player'>
          <h2>{name}</h2>
          <img src={image} alt ={name}/>
          <h3>{team}</h3>
          <h3>{jerseyNumber}</h3>
          <h3>{nationality}</h3>
          <h3>{age}</h3>
        </div>

      </div>
    </>
  )
}
