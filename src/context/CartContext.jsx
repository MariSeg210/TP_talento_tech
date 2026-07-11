import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Creación del contexto del carrito
export const CartContext = createContext();

// Hook personalizado para acceder al contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  // Verifica si un producto ya está en el carrito regresando un booleano
  const isInCart = (item) => {
    const inCart = cart.some((element) => element.id === item.id);
    return inCart;
  };

  // Agrega un producto al carrito
  const addItem = (item) => {
    if (isInCart(item)) {
      alert("El producto ya está en el carrito");
      return;
    }

    setCart([...cart, item]);
    alert("Producto agregado al carrito con éxito 🎉");
  };

  // Elimina un producto del carrito por su ID
  const removeItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    setCart(updatedCart);
    alert("Producto eliminado del carrito");
  };
  // Obtiene el total de productos en el carrito
  const getTotalItems = () => {
    return cart.length;
  };
  //total a pagar
  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.price, 0);
  };
  // Limpia el carrito
  const clearCart = () => {
    setCart([]);
  };
  //checkout
  const checkout = () => {
    if (cart.length === 0) {
      alert(
        "El carrito está vacío. Agrega productos antes de finalizar la compra.",
      );
      return;
    }
    alert("Gracias por tu compra");
    clearCart();
    navigate("/"); // Redirige a la página de inicio después del checkout
  };
  // Valores que se proporcionarán a través del contexto
  const values = {
    cart,
    clearCart,
    removeItem,
    addItem,
    getTotalItems,
    getCartTotal,
    checkout,
  };
  return (
    <CartContext.Provider value={{ ...values }}>
      {children}
    </CartContext.Provider>
  );
};
