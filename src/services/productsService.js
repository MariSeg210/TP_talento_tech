import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";

const productsRef = collection(db, "products");

/****  traer productos 
export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);
    const productsFormat = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return productsFormat;
  } catch (error) {
    console.error("Error fetching products: ", error);
    throw error;
    return [];
  }
};****/
/**** traer producto por id ****/
export const getProductById = async (id) => {
  try {
    /*referencia al documento*/
    const productRef = doc(db, "products", id);

    /*traigo el documento*/
    const snapshot = await getDoc(productRef);

    /*verifico si existe y retorno el producto con su id*/
    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Producto encontrado:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por ID:", error);

    return null;
  }
};

/**** traer productos por categoria ****/
export const getByCategory = async (category) => {
  try {
    let queryRef;
    if (category) {
      queryRef = query(productsRef, where("category", "==", category));
    } else {
      queryRef = productsRef;
    }
    /*traigo los documentos que cumplen la condición*/

    const snapshot = await getDocs(queryRef);
    /*mapeo los documentos para retornar un array de productos con su id*/
    const productsFormat = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return productsFormat;
  } catch (error) {
    console.error("Error fetching products by category: ", error);
    throw error;
    return [];
  }
};
/**** Alta de producto ****/
export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsRef, productData);
    return docRef.id; //retorno el id del producto creado para poder redirigir a la pagina de detalle del producto creado
  } catch (error) {
    console.error("Error al crear el producto: ", error);
    throw error;
  }
};
