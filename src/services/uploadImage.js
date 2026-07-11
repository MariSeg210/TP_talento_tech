const IMGBB_API_KEY = "d6aaa4e120a65ec7833c31c498a87e86";
const ENDPOINT = "https://api.imgbb.com/1/upload";
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  try {
    const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (!data.success) {
      throw new Error("Error al subir imagen: ");
    }
    return data.data.url;
  } catch (error) {
    console.error("ImgBB error: ", error);
    throw error;
  }
};
