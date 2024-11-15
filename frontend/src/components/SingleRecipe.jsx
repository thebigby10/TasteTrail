/* eslint-disable react/prop-types */
const SingleRecipe = ({recipe} ) => {
  return (
    <div key={recipe?.pk} className="p-8 mx-8 my-4 shadow-sm border rounded-md">
      <div>
        <h1 className="font-bold">{recipe?.data.title}</h1>
      </div>
      <div className="flex gap-8 items-center">
        <h1>Likes: {recipe?.data?.likes?.length}</h1>
        <h1>Dislikes: {recipe?.data?.dislikes?.length}</h1>
        <h1>Comments: {recipe?.data?.comments?.length}</h1>
      </div>
    </div>
  );
};

export default SingleRecipe;
