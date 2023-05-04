import React, { useState } from "react";
import "./Dropdown.css";
import fleche from "../../assets/img/Components/Dropdown/Fleche.svg";

function Dropdown({ titre, description }) {
  //state hook
  const [ouvert, setOuvert] = useState(false);

  return (
    <div className="dropdown" id={`dropdown-${titre}`}>
      <div className="header-dropdown">
        <div className="titre-dropdown">{titre}</div>
        <span
          className={`fleche-dropdown ${ouvert}`}
          onClick={() => setOuvert(!ouvert)}
        >
          <img src={fleche} alt="Ouvrir cette liste" />
        </span>
      </div>
      {ouvert && <div className="description-dropdown">{description}</div>}
    </div>
  );
}

export default Dropdown;
