/*import "./ItemDetail.css";
import { useState } from "react";
import { Item } from "../Item/Item";

export const ItemDetail = ({ item, description }) => {
  return (
    <Ite#""m {...item}>
      <button className="btn">Agregar al carrito</button>
    </Item>
  );
};*/
import "./ItemDetail.css";
import { Item } from "../Item/Item";
import { useCart } from "../../context/CartContext";
import "../Item/Item.css";
export const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  return (
    <section className="item-detail">
      <Item {...item}>
        <button className="btn-cart" onClick={() => addItem(item)}>
          Agregar al carrito
        </button>
      </Item>
    </section>
  );
};
