/* eslint-disable react/prop-types */
const SimilarRecipeCard = ({ recipe }) => {
  return (
    <div className="shadow-xl my-4 bg-white p-2 rounded-md relative z-20">
      <figure>
        <img
          className="h-24 w-full object-cover"
          src={recipe?.data?.imgUrl}
          alt={recipe?.data?.title}
        />
      </figure>
      <div>
        <p>
          <small className="font-semibold">
            <small>{recipe?.data?.title}</small>
          </small>
        </p>
      </div>
    </div>
  );
};

export default SimilarRecipeCard;
