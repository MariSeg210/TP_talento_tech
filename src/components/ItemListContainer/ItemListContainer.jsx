import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // uso un json local
  useEffect(() => {
    setLoading(true);
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }
  return (
    <section className="item-list-container">
      <ItemList products={products} />
    </section>
  );
};
