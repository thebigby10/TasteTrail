import superBg from "../../assets/images/Background/super_bg.jpeg";
import useRecipe from "../../hooks/useRecipe";

const SimilarRecipe = () => {
  const { similarRecipes } = useRecipe();

  return (
    <div
      className="relative w-60 h-[calc(100vh-40px)] p-1 md:p-4"
      style={{
        backgroundImage: `url(${superBg})`,
      }}
    >
      <div className="absolute inset-0 bg-white opacity-90 z-0 p-4 ">
        
      </div>
    </div>
  );
};

export default SimilarRecipe;
