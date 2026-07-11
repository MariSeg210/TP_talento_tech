import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export const ProductSuccess = () => {
  const { id } = useParams();
  /*const navigate = useNavigate();*/
  return (
    <section className="success-page">
      <div className="product-success">✅ </div>
      <h2>Producto creado con éxito</h2>
      <p>ID de producto: </p>
      <p>Puede cargar otro haciendo click en el botón</p>
      <Link className="btn bg-primary primary" to="/admin" replace>
        Agregar otro producto
      </Link>
    </section>
  );
};
