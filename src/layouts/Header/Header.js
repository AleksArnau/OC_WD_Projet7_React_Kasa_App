import React from "react";
import "./Header.css";
import logoHeader from "../../assets/img/BannerLogo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <img to="/" src={logoHeader} alt="Logo" />
      <nav>
        <NavLink
          to="/"
          className="lien-site"
          style={({ isActive }) =>
            isActive
              ? { borderBottom: "1px solid #ff6060" }
              : { borderBottom: "unset" }
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className="lien-site"
          style={({ isActive }) =>
            isActive
              ? { borderBottom: "1px solid #ff6060" }
              : { borderBottom: "unset" }
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
