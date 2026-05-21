import "./Carrito.css";
import { useState, useEffect } from "react";
import { carrito } from "../../data/carrito";
import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
export const Carrito = ({ item }) => {
  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    setCartState(cart);
  }, [cartItems]);
  //Vacia el carrito
  const empty = () => {
    setCartItems([]);
  };
  // if (cartItems.length === 0) {
  //  return (
  //    <div className="empty-cart">
  //     <h2>Tu carrito está vacío</h2>
  //     <Link to="/" className="back-btn">Ir a la tienda</Link>
  //   </div>
  // );
  //}
  return (
    <div>
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <h2>{item.nombre}</h2>
              <p>Precio: ${item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
