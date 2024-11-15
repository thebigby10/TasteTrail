/* eslint-disable react/prop-types */
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RecipeForm = ({
  setTitle,
  setLocation,
  setIngredientInput,
  setDescription,
  setTagInput,
  handleAddTag,
  handleAddIngredient,
  handleSubmit,
  tags,
  ingredients,
  tagInput,
  ingredientInput,
  handleRemoveTag,
  handleRemoveIngredient,
  loading,
}) => {
  const handleKeyPressTag = (e) => {
    if (e.key === " " && tagInput.trim()) {
      handleAddTag();
    }
  };

  const handleKeyPressIngredient = (e) => {
    if (e.key === " " && ingredientInput.trim()) {
      handleAddIngredient();
    }
  };

  return (
    <div className="max-w-4xl bg-white mx-auto mt-8 p-8  ">
      <h2 className="text-3xl font-bold mb-6 pb-2 text-center border-b border-second">Create Recipe</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block text-gray-700 font-semibold">Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-second"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Image</label>
          <input
            type="file"
            name="image"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-second"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Tags</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyUp={handleKeyPressTag}
              className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-second"
              placeholder="Add a tag"
            />
          </div>
          <div className="flex flex-wrap mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                onClick={() => handleRemoveTag(index)}
                className="px-2 py-1 m-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer hover:bg-red-500 hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Ingredients
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
              onKeyUp={handleKeyPressIngredient}
              className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-second"
              placeholder="Add an ingredient"
            />
          </div>
          <div className="flex flex-wrap mt-2">
            {ingredients.map((ingredient, index) => (
              <span
                key={index}
                onClick={() => handleRemoveIngredient(index)}
                className={`px-2 py-1 m-1 bg-gray-100 text-gray-800 rounded-full cursor-pointer hover:bg-red-500 hover:text-white`}
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700 font-semibold">Location</label>
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-second"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700 font-semibold">
            Description
          </label>
          <ReactQuill
            onChange={setDescription}
            className="bg-white border border-gray-300 rounded focus:outline-none focus:border-second h-40 mb-6"
            placeholder="Detailed Recipe Description..."
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <button
            disabled={loading}
            type="submit"
            className="w-full px-4 py-2 bg-second text-white font-semibold rounded"
          >
            {loading ? "Please Wait..." : "Submit Recipe"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
