import { Link } from "react-router-dom";
import superBg from "../../assets/images/Background/super_bg.jpeg";
import SimilarRecipeCard from "../../components/SimilarRecipeCard";
import useRecipe from "../../hooks/useRecipe";
import { MdRecommend } from "react-icons/md";

const SimilarRecipe = () => {
  const { similarRecipes } = useRecipe();

  return (
    <div
      className="relative w-60 h-[calc(100vh-40px)] p-1 md:p-4"
      style={{
        backgroundImage: `url(${superBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-90 z-10 px-8 py-2 overflow-y-auto">
        <div className="flex gap-1 items-center">
          <div className="p-2 bg-red-500 text-white rounded-full">
            <MdRecommend className="h-5 w-5" />
          </div>
          <h1 className="font-bold">Recommendation</h1>
        </div>
        {similarRecipes?.map((r, idx) => (
          <Link to={`/recipe-details/${r?.pk}`} key={idx}>
            <SimilarRecipeCard recipe={r} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarRecipe;