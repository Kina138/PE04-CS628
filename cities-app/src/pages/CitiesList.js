// src/pages/CitiesList.js
import { Link, Outlet } from "react-router-dom";

function CitiesList({ cities }) {
  return (
    <div>
      <h2>Cities List</h2>
      {cities.length === 0 ? (
        <p>No cities available. Please add a city.</p>
      ) : (
        <ul>
          {cities.map((city) => (
            <li key={city.id}>
              {/* Relative link: clicking will navigate to /cities/:id */}
              <Link to={`${city.id}`}>{city.name}</Link>
            </li>
          ))}
        </ul>
      )}
      {/* This Outlet will render CityDetail when a city is selected */}
      <Outlet />
    </div>
  );
}

export default CitiesList;
