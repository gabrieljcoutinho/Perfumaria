import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header/header.css";

const Header = () => {
  return (
    <header className="header container">
      <ul className="ulHeader">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/loja">Loja</Link></li>
            <li><Link to="/contato">Contato</Link></li>
      </ul>

    </header>
  );
};

export default Header;
