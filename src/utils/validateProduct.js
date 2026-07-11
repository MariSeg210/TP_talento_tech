export const validateProduct = (product) => {
  const errors = {};

  /*validar que el nombre no este vacio*/
  if (!product.name || product.name.trim() === "") {
    errors.name = "El nombre del producto es requerido.";
  }

  /*validar que el precio sea un número positivo*/
  if (!product.price || isNaN(product.price) || Number(product.price) <= 0) {
    errors.price = "El precio del producto debe ser un número mayor a 0.";
  }

  /*validar que la categoria no este vacia y que sea solo perro o gato*/
  const validCategories = ["perro", "gato"];
  if (!validCategories.includes(product.category.trim().toLowerCase())) {
    errors.category = "La categoría del producto debe ser 'perro' o 'gato'.";
  }

  /*validar que la descripción no este vacia*/
  if (!product.description || product.description.trim() === "") {
    errors.description = "La descripción del producto es requerida.";
  }

  /*|validar que el stock sea un n+umero no negativo
    if (!product.stock || isNaN(product.stock) || Number(product.stock) < 0) {
        errors.stock = "El stock del producto debe ser un número no negativo.";
    }
    
    */

  /*validar que el producto tenga al menos una imagen*/
  if (!product.file || product.file.length === 0) {
    errors.file = "La imagen del producto es requerida.";
  }
  /*validar que la imagen sea una url valida*/
  if (!product.file || product.file.length === 0) {
    errors.file = "La imagen del producto es requerida.";
  } else {
    //valido formato
    const urlPattern = ["image/jpeg", "image/png", "image/webp"];
    if (!urlPattern.includes(product.file.type)) {
      errors.file =
        "La imagen del producto debe ser un archivo del tipo: png, jpg o webp.";
    }
    //valido tamaño maximo 5mb
    const maxSizeInBytes = 5 * 1024 * 1024;
    if (product.file.size > maxSizeInBytes) {
      errors.file = "La imagen del producto no debe superar los 5MB.";
    }
  }

  return errors;
};
