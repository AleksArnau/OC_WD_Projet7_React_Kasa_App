import React, { useState } from "react";
import "./Carrousel.css";
import fleche from "../../assets/img/Components/Carrousel/Fleche.png";

function Carrousel({ images }) {
  //hook
  let [imgDisplay, switchImg] = useState(0);
  let nombreImg = images.length;

  const imgPrecedente = () => {
    if (imgDisplay === 0) {
      switchImg(nombreImg - 1);
    } else {
      switchImg(imgDisplay - 1);
    }
    return switchImg;
  };

  const imgSuivante = () => {
    if (imgDisplay === nombreImg - 1) {
      switchImg((nombreImg = 0));
    } else {
      switchImg(imgDisplay + 1);
    }
    return switchImg;
  };

  return (
    <div className="carrousel">
      {nombreImg > 1 && (
        <img
          className="fleche fleche-gauche"
          src={fleche}
          alt="Contenu précedént"
          onClick={imgPrecedente}
        />
      )}
      {images.map((image, index) => {
        return (
          <img
            key={index}
            className={
              index === imgDisplay ? "carrousel-img actif" : "carrousel-img"
            }
            src={image}
            alt="Logement"
          />
        );
      })}
      {nombreImg > 1 && (
        <img
          className="fleche fleche-droite"
          src={fleche}
          alt="Contenu suivant"
          onClick={imgSuivante}
        />
      )}
    </div>
  );
}

export default Carrousel;
