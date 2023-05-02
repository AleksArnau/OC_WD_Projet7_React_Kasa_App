import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import bannerHome from "../../assets/img/Pages/Home/HomeBanner.png";
import Tuile from "../../components/Tuile/Tuile";
import ListeLogements from "../../assets/api/logements.json";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="Accueil">
      <Banner image={bannerHome} texte="Chez vous, partout et ailleurs" />
      <div className="liste-logements">
        {ListeLogements.map((logement) => (
          <NavLink to={"/logement/" + logement.id}>
            <Tuile
              key={logement.id}
              id={logement.id}
              image={logement.cover}
              titre={logement.title}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Home;
