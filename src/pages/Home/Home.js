import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import bannerHome from "../../assets/img/Pages/Home/HomeBanner.png";

function Home() {
  return(
    <>
      <Banner image={bannerHome} />
      <span>Chez vous, partout et ailleurs</span>
    </>
  );
}

export default Home;