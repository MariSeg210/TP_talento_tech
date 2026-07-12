import "./ProductFormContainer.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../utils/validateProduct";
import { uploadImage } from "../../services/uploadImage";
import { createProduct } from "../../services/productsService";
export const ProductFormContainer = () => {
  const navigate = useNavigate(); //hook de react router dom para redirigir a la pagina de exito despues de crear el producto
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  /*aqui iria la logica para validar el producto, por ahora solo valido que el nombre no este vacio, el precio sea un numero positivo, la categoria no este vacia, la descripcion no este vacia, el producto tenga al menos una imagen y que la imagen sea una url valida, si hay errores los guardo en el estado de errores para mostrarlos en el formulario, si no hay errores creo el producto y redirijo a la pagina de exito*/
  const handleChange = (e) => {
    const { name, value } = e.target; //desestructuro el name y el value del input que se esta cambiando para actualizar el estado del producto con el nuevo valor, uso el name del input para saber que propiedad del producto estoy actualizando

    setProduct({
      ...product,
      [name]: value,
    });
  };
  /*
  const handleDelete = (id, name) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el producto "${name}"?`);
    if (confirmDelete) {
      // Lógica para eliminar el producto
      console.log(`Producto con ID ${id} eliminado.`);
    } else {
      console.log(`Eliminación del producto con ID ${id} cancelada.`);
    }
  };

    const { name } = e.target; //desestructuro el name del input que se esta cambiando para actualizar el estado del producto con el nuevo valor, uso el name del input para saber que propiedad del producto estoy actualizando
    setProduct({
      ...product,
      [name]: "",
    });
  };*/
  /*handleFileChange para actualizar el estado del archivo seleccionado en el formulario, se ejecuta cada vez que se selecciona un nuevo archivo en el input de tipo file, recibe el evento del input y actualiza el estado del archivo con el primer archivo seleccionado (e.target.files[0])*/
  const handleFileChange = (e) => {
    const file = e.target.files[0] || null; //obtengo el primer archivo seleccionado del input de tipo file
    setFile(file);
  };
  /*handleSubmit para manejar el envio del formulario, se ejecuta cuando se hace submit en el formulario, recibe el evento del formulario, previene el comportamiento por defecto del formulario (recargar la pagina), setea loading en true para mostrar un mensaje de cargando mientras se crea el producto, luego redirige a la pagina de exito con el id del producto creado despues de 2 segundos (simulando la creacion del producto)*/
  const handleSubmit = async (e) => {
    console.log("handleSubmit ejecutado");
    e.preventDefault();
    setErrors({}); //reseteo los errores antes de validar el producto para mostrar solo los errores actuales, si hay errores se setean en el estado de errores y se muestra un mensaje de error en el formulario, si no hay errores se crea el producto y se redirige a la pagina de exito
    setLoading(true);
    console.log("Validando campos");
    /*validar el producto con la funcion validateProduct que recibe el producto y el archivo seleccionado, si hay errores se guardan en el estado de errores para mostrarlos en el formulario*/
    const newErrors = validateProduct({ ...product, file }); //valido el producto con la funcion validateProduct que recibe el producto y el archivo seleccionado, si hay errores se guardan en el estado de errores para mostrarlos en el formulario
    if (Object.keys(newErrors).length > 0) {
      console.log("Fallaron validaciones, errores: ", newErrors);
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    console.log("Validaciones correctas, creando producto...");
    try {
      console.log("Subiendo imagen a ImgBB...");
      //throw new Errors("Error de prueba 🔥");
      //subir la imagen a cloudinary y obtener la url de la imagen para guardarla en el producto, esta logica iria en el servicio de productos pero por ahora la dejo aca para simular la creacion del producto con imagen
      const imageUrl = await uploadImage(file);
      console.log("Imagen subida con éxito, URL: ", imageUrl);
      //armar el producto con la url de la imagen y los datos del formulario para enviarlo al backend, esta logica tambien iria en el servicio de productos pero por ahora la dejo aca para simular la creacion del producto
      const productData = {
        ...product,
        price: Number(product.price), //convertir el precio a numero para enviarlo al backend
        image: imageUrl,
      };

      console.log("Creando producto con datos: ", productData);
      //alta
      const id = await createProduct(productData);
      console.error("Producto creado con éxito con ID:", id);
      console.error("Producto creado con éxito:", productData);
      //vaciar
      setProduct({ name: "", price: "", category: "", description: "" }); //reseteo
      setFile(null);
      navigate(`/admin/products/success/${id}`, { replace: true });
    } catch (error) {
      console.error("Error al crear el producto:", error);
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};
