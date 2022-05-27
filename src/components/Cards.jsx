import React from "react";
import Card from "./Card.jsx";
import S from "../styles/Cards.module.css";

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  if (cities) {
    return (
      <div className={S.container}>
        {cities.map((city) => (
          <Card
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
            key={city.id}
            id={city.id}
            // estModal={estModal}
            // setEstModal={setEstModal}
            descrp={city.desc}
            temp={city.temp}
            wind={city.wind}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className={S.container}>
        <span>Sin Ciudad</span>
      </div>
    );
  }
}
