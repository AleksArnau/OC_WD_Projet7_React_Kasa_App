import React from "react";
import "./Header.css";
import logoHeader from "../../assets/img/BannerLogo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src={logoHeader} alt="Logo" />
      <nav>
        <NavLink to="/home" className="lien-site lien-menu">
          Accueil
        </NavLink>
        <NavLink to="/about" className="lien-site lien-menu">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
