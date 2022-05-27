import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Ciudad from "./components/Ciudad";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  const [cities, setCities] = useState([]);

  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = process.env.REACT_APP_API_KEY;

  const onClose = (id) => {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  };

  const onFilter = (cityId) => {
    let city = cities.filter((c) => c.id === parseInt(cityId));

    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  };

  const onSearch = (ciudad) => {
    let found = cities?.find(
      (city) => city.name.toLowerCase() === ciudad.toLowerCase()
    );
    if (found) return;

    fetch(`${URL}?q=${ciudad}&appid=${API_KEY}&units=metric`)
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  };

  return (
    <div>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Cards cities={cities} onClose={onClose} />} />
        <Route
          path="Ciudad/:ciudadId"
          element={<Ciudad onFilter={onFilter} />}
        />
        {/* <Route path='Ciudad/:ciudadId' children ={<Ciudad />}/> */}
      </Routes>
    </div>
  );
}

export default App;
