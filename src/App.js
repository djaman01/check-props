import React, { useState } from 'react';
import axios from 'axios';

function App() {
  //On crée une state variable formData avec comme value par défaut un objet avec  2 properties Nom et Prénom, sans value;
  //formData.Nom et formData.prenom will be the values of the 2 inputs fields
  const [formData, setFormData] = useState({
    Nom: '',
    Prenom: '',
  });

  //will be called on input attribute onChange= {handleChange}
  //Puis on donne des values à ces 2 properties de la state variable et en 1 code grace à ce bou tde code et au spread operator
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Will be called on the form attribute onSubmit={handleSubmit}
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3005/', formData);
      // Handle the response if needed (e.g., show a success message)
      console.log('Response from the server:', response.data);
    } catch (error) {
      // Handle the error (e.g., show an error message)
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underlin text-red-500">Hello world!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Nom">Nom:</label>
          <input
            type="text"
            id="Nom"
            name="Nom"
            value={formData.Nom}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Prenom">Prenom:</label>
          <input
            type="text"
            id="Prenom"
            name="Prenom"
            value={formData.Prenom}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
