import { useCart } from "../../context/CartContext";
import "./Cart.css";
export const CartSummary = ({ cartItems }) => {
  const { getCartTotal, checkout, getTotalItems, clearCart } = useCart();
  const total = getCartTotal();
  const totalItems = getTotalItems();

  return (
    <div className="cart-summary">
      <h2>Tu carrito</h2>

      <p className="total-prod">Total de productos: {totalItems} </p>
      <p className="total-price">Total a pagar ${total}</p>
      <button onClick={clearCart} className="btn  primary ">
        Vaciar carrito
      </button>
      <button onClick={checkout} className="btn primary ">
        Finalizar compra
      </button>
    </div>
  );
};
