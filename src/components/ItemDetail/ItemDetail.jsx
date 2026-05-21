import "./ItemDetail.css";
import { useState } from "react";
import { Item } from "../Item/Item";

export const ItemDetail = ({ item, description }) => {
  return (
    <Item {...item}>
      <button className="btn">Agregar al carrito</button>
    </Item>
  );
};
