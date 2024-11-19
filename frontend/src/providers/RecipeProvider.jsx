/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeProvider = ({ children }) => {
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSimilarRecipes = async (recipeId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/recipe/similar_post/${recipeId}`
      );
      if (response.status == 200) {
        setSimilarRecipes(response.data);
      }
    } catch (error) {
      console.log(error.message || error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <RecipeContext.Provider value={{ similarRecipes, fetchSimilarRecipes, loading, setLoading }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
