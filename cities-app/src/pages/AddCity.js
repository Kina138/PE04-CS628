// src/pages/AddCity.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCity({ addCity }) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity({ name, country, population, description });
    // Redirect to the cities list page after adding a city
    navigate("/cities");
  };

  return (
    <div>
      <h2>Add New City</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>City Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Country: </label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
        </div>
        <div>
          <label>Population: </label>
          <input type="number" value={population} onChange={(e) => setPopulation(e.target.value)} required />
        </div>
        <div>
          <label>Description: </label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;
