import { Link } from "react-router-dom";
import "./ProductFormContainer.css";
export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section className="product-form-container">
      <form className="product-form" onSubmit={onSubmit}>
        <h1>Crear Nuevo Producto</h1>
        {/*Nombre */}
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={product?.name || ""}
            onChange={onChange}
            required
          />
          {errors?.name && <p className="error">{errors.name}</p>}
        </div>
        {/*Precio*/}
        <div>
          <label>Precio</label>
          <input
            type="number"
            name="price"
            value={product?.price}
            onChange={onChange}
            min="0"
            required
          />
          {errors?.price && <p className="error">{errors.price}</p>}
        </div>
        {/*Categoría */}
        <div>
          <label>Categoría</label>
          <select
            name="category"
            value={product?.category || ""}
            onChange={onChange}
            required
          >
            <option value="">Seleccionar categoría</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
          </select>
          {errors?.category && <p className="error">{errors.category} </p>}
        </div>
        {/*Descripción */}
        <div>
          <label>Descripción</label>
          <input
            type="text"
            name="description"
            value={product?.description}
            onChange={onChange}
            required
          />
          {errors?.description && (
            <p className="error">{errors.description} </p>
          )}
        </div>
        {/*Imagen */}
        <div>
          <label>Imagen</label>
          <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
            required
          />
          {errors?.file && <p className="error">{errors.file} </p>}
        </div>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>

        {errors?.general && <p className="error">{errors.general} </p>}
      </form>
      <Link className="btn bg-primary primary" to="/admin" replace>
        Volver al panel de administración
      </Link>
    </section>
  );
};
