import { useEffect, useState } from "react";
import { fetchTrendingRecipes } from "../../utils/api";
import Recipes from "../Recipe/Recipes";
import { FaFire } from "react-icons/fa";

const Trending = () => {
  const [recipes, setRecipes] = useState([]);

  const fetch = async () => {
    const data = await fetchTrendingRecipes();
    setRecipes(data.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  console.log(recipes);

  return (
    <div>
      <div className="flex gap-1 items-center p-4 bg-white ">
        <div className="p-2 bg-red-500 text-white rounded-full">
          <FaFire className="h-7 w-7"/>
        </div>
        <h1 className="font-bold text-xl">Trending</h1>
      </div>
        <Recipes recipes={recipes} />
    </div>
  );
};

export default Trending;
