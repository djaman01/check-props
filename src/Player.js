
//Je vais donner des valeurs par default au props, au cas ou il n'y a pas d'objets passés
export default function Player({ name="Jaafar", team="Morocco", nationality="Marocain", jerseyNumber="10", age=27, image="https://scontent.fcmn1-2.fna.fbcdn.net/v/t39.30808-6/279495586_10161589920499392_3921038555333232680_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGLF3zXAgpB7Lr1c0kH7poFX0zTX-H097RfTNNf4fT3tIAQlj3qVCdQS7Xbe5kgQ7M&_nc_ohc=bU_SedMe3r0AX-8wOXT&_nc_zt=23&_nc_ht=scontent.fcmn1-2.fna&oh=00_AfBfmXNSODlNJuTUGlJqtNQTOeJbidtZQ5-Y2i7eOddTog&oe=64F8C9A1" }) {
  return (
    <div className="all-card">
      
      <div className="title" style={{textAlign: "center"}}>
        <h1>Player card</h1>
      </div>

      <div className="player-card">
        <h2 className="player-name"> {name} </h2>
        <img 
        src={image} alt={name}
        style={{width: 300, height: 300}} 
        />
        <h3 className="team">{team}</h3>
        <h3 className="number">{jerseyNumber}</h3>
        <h2 className="nationality">{nationality}</h2>
        <h2 className="age">{age}</h2>
      </div>

    </div>
  )
}
