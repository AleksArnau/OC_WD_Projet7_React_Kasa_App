import React from "react";
import "./Banner.css";

function Banner({ image }) {
  return <img className="banner" src={image} alt="Banner"/>;
}

export default Banner;
