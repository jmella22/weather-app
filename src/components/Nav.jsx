import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./Searchbar";
import S from "../styles/Nav.module.css";

function Nav({ onSearch }) {
  // [name, setName] = useState('');
  return (
    <nav className={S.nav}>
      <div className={S.logo}>
        <a href="https://soyhenry.com" target="_black">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div>
        <h1 className={S.text}>Weather App</h1>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Nav;
