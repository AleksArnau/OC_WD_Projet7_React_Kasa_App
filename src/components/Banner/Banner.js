import React from "react";
import "./Banner.css";

function Banner({ image, texte }) {
  return(
    <div className="banniere">
      <img className="banniere-img" src={image} alt="Banner"/>
      <div className="banniere-sombre"></div>
      <span className="banniere-txt">{texte}</span>
    </div>
  );
}

export default Banner;
