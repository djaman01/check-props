import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    Nom: '',
    Prenom: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
