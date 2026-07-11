import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import { Link } from "react-router-dom";
import "./Cart.css";
export const CartView = () => {
  const { cart } = useCart();
  return (
    <section className="cart-container">
      <h1>Carrito de compras</h1>
      {cart.length > 0 ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <>
          <div className="empty-state">
            <p className="empty-cart">Tu carrito está vacío.</p>
            <Link to={"/"} className="back-btn btn primary big-primary">
              Ir a la tienda
            </Link>
          </div>
        </>
      )}
    </section>
  );
};
