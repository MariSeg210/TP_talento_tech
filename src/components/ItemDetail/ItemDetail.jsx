/*import "./ItemDetail.css";
import { useState } from "react";
import { Item } from "../Item/Item";

export const ItemDetail = ({ item, description }) => {
  return (
    <Item {...item}>
      <button className="btn">Agregar al carrito</button>
    </Item>
  );
};*/
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  return (
    <section className="detail-card">
      {/* IMAGEN */}
      <div className="detail-image-container">
        <img src={item.image} alt={item.name} className="detail-image" />
      </div>

      {/* INFO */}
      <div className="detail-info">
        <h2 className="detail-title">{item.name}</h2>

        <p className="detail-price">${item.price}</p>

        <p className="detail-description">{item.description}</p>

        <button className="btn-cart">Agregar al carrito</button>
      </div>
    </section>
  );
};
