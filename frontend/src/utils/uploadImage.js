import axios from "axios";
import toast from "react-hot-toast";

export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  try {
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API || "50e5f1d5cc97aa1b9e315257fb4dbeb8"}`,
      formData
    );
    return data.data.display_url;
  } catch (error) {
    toast.error(`Error while updloading image: ${error.message}`);
  }
};
