//const IMGBB_API_KEY = "d6aaa4e120a65ec7833c31c498a87e86";
//const ENDPOINT = "https://api.imgbb.com/1/upload";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/j7hdunyl/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "yztc5yap";
const cloudName = "j7hdunyl";
export const uploadImage = async (file) => {
  const formData = new FormData();
  //formData.append("image", file);
  //formData.append("key", IMGBB_API_KEY);

  /******** Cloudinary  *******/
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error al subir imagen a Cloudinary:", errorData);
      throw new Error("Error al subir imagen: " + response.statusText);
    }

    /*const response = await fetch(ENDPOINT, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error al subir imagen a ImgBB:", errorData);
      throw new Error("Error al subir imagen: ");
    }*/
    const data = await response.json();
    /*if (!data.success) {
      throw new Error("Error al subir imagen: ");
    }*/
    //return data.data.url;
    return data.secure_url; // Devuelve la URL segura de la imagen subida
  } catch (error) {
    //console.error("ImgBB error: ", error);
    console.error("Cloudinary error: ", error);
    throw error;
  }
};
