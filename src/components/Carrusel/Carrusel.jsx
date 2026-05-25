import React, { useState } from "react";
import image1 from "../../assets/image1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import "./Carrusel.css";

const images = [image1, img2, img3, img4];

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
