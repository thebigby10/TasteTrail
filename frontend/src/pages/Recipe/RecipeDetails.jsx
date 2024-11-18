import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipes } from "../../utils/api";


const RecipeDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [recipes, setRecipes] = useState([]);

  const fetch = async () => {
    const data = await fetchRecipes();
    setRecipes(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  console.log(recipes);

  return <div>Recipe Details comming....</div>;
};

export default RecipeDetails;
