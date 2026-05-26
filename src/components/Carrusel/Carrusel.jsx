import React, { useState } from "react";

import "./Carrusel.css";

const images = [
  "img/carrusel/img1.png",
  "img/carrusel/img2.png",
  "img/carrusel/img3.png",
];

export const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (images.length === 0) return <div>Cargando...</div>;
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };
  return (
    <section>
      <h1 className="carrusel-title ">
        Tenemos todo lo que tu mascota necesita
      </h1>
      {/*Carrusel */}
      <div className="carrusel-contenedor">
        <button onClick={prevSlide} className="btn-carrusel">
          &lt;
        </button>

        <img
          src={images[currentIndex]}
          alt="Slider"
          className="carrusel-image"
        />

        <button onClick={nextSlide} className="btn-carrusel">
          &gt;
        </button>
      </div>
    </section>
  );
};
