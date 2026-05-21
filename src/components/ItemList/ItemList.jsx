import { Item } from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";
export const ItemList = ({ products }) => {
  if (!products.length) {
    return <p>No hay productos disponibles</p>;
  }
  return (
    <>
      <div className="container">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <Item {...product} />
          </Link>
        ))}
      </div>
    </>
  );
};
