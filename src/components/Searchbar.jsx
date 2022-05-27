import React, { useState } from "react";
import S from "../styles/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city, setCity] = useState("");

  return (
    <div>
      <div className={S.container}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(city);
            setCity("");
          }}
        >
          <input
            className={S.input}
            type="text"
            placeholder="City..."
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <input type="submit" className={S.button} value="Search" />
        </form>
      </div>
    </div>
  );
}
