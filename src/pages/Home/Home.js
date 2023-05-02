import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import bannerHome from "../../assets/img/Pages/Home/HomeBanner.png";
import Tuile from "../../components/Tuile/Tuile";
import ListeLogements from "../../assets/api/logements.json";

function Home() {
  const Logements = ListeLogements.map((logement) => {
    return (
      <Tuile id={logement.id} image={logement.cover} titre={logement.title} />
    );
  });

  return (
    <>
      <Banner image={bannerHome} />
      <div className="liste-locations">{Logements}</div>
    </>
  );
}

export default Home;
