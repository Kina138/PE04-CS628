// src/App.js
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import CitiesList from "./pages/CitiesList";
import CityDetail from "./pages/CityDetail";
import AddCity from "./pages/AddCity";

function App() {
  // Start with an empty list
  const [cities, setCities] = useState([]);

  // Function to add a new city
  const addCity = (city) => {
    const newCity = { ...city, id: new Date().getTime() };
    setCities((prevCities) => [...prevCities, newCity]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* "cities" route displays the list and nests the detail route */}
          <Route path="cities" element={<CitiesList cities={cities} />}>
            <Route path=":id" element={<CityDetail cities={cities} />} />
          </Route>
          <Route path="add" element={<AddCity addCity={addCity} />} />
          {/* Redirect any unknown route to /cities */}
          <Route path="*" element={<Navigate to="/cities" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
