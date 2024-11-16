/* eslint-disable react/prop-types */
import SingleRecipe from "../../components/SingleRecipe";

const Recipes = ({ recipes, setControl, control }) => {
  return (
    <div className="space-y-12 bg-white">
      {recipes?.map((r, idx) => (
        <div key={idx}>
          <SingleRecipe recipe={r} setControl={setControl} control={control} />
        </div>
      ))}
    </div>
  );
};

export default Recipes;
