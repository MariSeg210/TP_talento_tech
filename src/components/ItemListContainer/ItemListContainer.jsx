import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getByCategory } from "../../services/productsService";
import "./ItemListContainer.css";

import { useParams } from "react-router-dom";
export const ItemListContainer = () => {
  /*para filtrar por categoria uso el hook useParams para obtener el parametro de la url y luego lo paso a la funcion getByCategory que se encarga de traer los productos filtrados por categoria, si no hay categoria trae todos los productos*/
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect para traer los productos cada vez que cambia la categoria o cuando se monta el componente, seteo loading en true para mostrar el mensaje de cargando mientras se traen los productos, luego seteo los productos en el estado y finalmente seteo loading en false para mostrar los productos en pantalla, si hay un error lo logueo en consola
  useEffect(() => {
    setLoading(true);
    // si no hay categoria traigo todos los productos, sino traigo los productos filtrados por categoria
    getByCategory(category)
      .then((data) => setProducts(data))
      .catch((error) => console.log("Hubo un error:", error))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }
  return (
    <section>
      <h2 className="container-title">Productos disponibles</h2>
      <ItemList products={products} />
    </section>
  );
};
