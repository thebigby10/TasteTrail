import { useContext } from "react";
import { RecipeContext } from "../providers/RecipeProvider";

const useRecipe = () => {
  return useContext(RecipeContext);
};

export default useRecipe;
