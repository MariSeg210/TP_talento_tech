import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";

export const CartItem = ({ item }) => {
  const { removeItem } = useCart();
  return (
    <Item {...item}>
      <button className="btn primary" onClick={() => removeItem(item.id)}>
        Eliminar del carrito
      </button>
    </Item>
  );
};
