import { useEffect, useState } from "react";
import { fetchTrendingRecipes } from "../../utils/api";
import Recipes from "../Recipe/Recipes";
import { FaFire } from "react-icons/fa";
import Loading from "../../components/Loading";

const Trending = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    setLoading(true);
    const data = await fetchTrendingRecipes();
    setRecipes(data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  // console.log(recipes);

  if (loading) return <Loading />;

  return (
    <div>
      <div className="flex gap-1 items-center p-4 bg-white ">
        <div className="p-2 bg-red-500 text-white rounded-full">
          <FaFire className="h-5 w-5 md:h-7 md:w-7" />
        </div>
        <h1 className="font-bold text-lg md:text-xl">Trending</h1>
      </div>
      <Recipes recipes={recipes} />
    </div>
  );
};

export default Trending;
