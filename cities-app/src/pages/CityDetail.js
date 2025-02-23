// src/pages/CityDetail.js
import { useParams } from "react-router-dom";

function CityDetail({ cities }) {
  const { id } = useParams();
  const city = cities.find((city) => city.id === parseInt(id, 10));

  if (!city) {
    return <p>City not found.</p>;
  }

  return (
    <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc" }}>
      <h3>{city.name} Details</h3>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population}</p>
      <p><strong>Description:</strong> {city.description}</p>
    </div>
  );
}

export default CityDetail;
