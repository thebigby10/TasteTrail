import axios from "axios";
import toast from "react-hot-toast";

export const fetchRecipes = async () => {
  try {
    const data = await axios.get("http://127.0.0.1:8000/recipe/");
    return data;
  } catch (error) {
    toast.error(error.message || error);
  }
};

export const fetchARecipe = async (id) => {
  try {
    const data = await axios.get(`http://127.0.0.1:8000/recipe/${id}`);
    return data;
  } catch (error) {
    toast.error(error.message || error);
  }
};

export const fetchRecipesForUser = async (email) => {
  try {
    const data = await axios.get(
      `http://127.0.0.1:8000/recipe/user_post/user_email=${email}`
    );
    return data;
  } catch (error) {
    toast.error(error.message || error);
  }
};

export const fetchTrendingRecipes = async () => {
  try {
    const data = await axios.get(`http://127.0.0.1:8000/recipe/trending/`);
    return data;
  } catch (error) {
    console.log(error.message || error);
  }
};

export const fetchUserInfo = async (email) => {
  try {
    const data = await axios.get(
      `http://127.0.0.1:8000/user/user_info/${email}`
    );
    return data;
  } catch (error) {
    console.log(error.message || error);
  }
};
