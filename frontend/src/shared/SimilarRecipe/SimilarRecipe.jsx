import superBg from "../../assets/images/Background/super_bg.jpeg";

const SimilarRecipe = () => {
  return (
    <div
      className="relative w-60 h-[calc(100vh-40px)] p-1 md:p-4"
      style={{
        backgroundImage: `url(${superBg})`,
      }}
    >
      <div className="absolute inset-0 bg-white opacity-90 z-0 p-4">
        <h1>Similar Recipes comming</h1>
      </div>
    </div>
  );
};

export default SimilarRecipe;
