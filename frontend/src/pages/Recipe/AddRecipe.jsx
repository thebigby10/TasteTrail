import { useState } from "react";
import RecipeForm from "../../components/RecipeForm";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");

  const handleAddTag = () => {
    if (tagInput.trim()) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleAddIngredient = () => {
    if (ingredientInput.trim()) {
      setIngredients([...ingredients, ingredientInput]);
      setIngredientInput("");
    }
  };

  const handleRemoveTag = (index) => {
    const updatedTags = tags.filter((_, i) => i !== index);
    setTags(updatedTags);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ title, imgUrl, tags, location, ingredients, description });
  };

  return (
    <div>
      <RecipeForm
        setTitle={setTitle}
        setImgUrl={setImgUrl}
        setLocation={setLocation}
        setIngredientInput={setIngredientInput}
        setDescription={setDescription}
        setTagInput={setTagInput}
        handleAddTag={handleAddTag}
        handleAddIngredient={handleAddIngredient}
        handleSubmit={handleSubmit}
        tags={tags}
        ingredients={ingredients}
        tagInput={tagInput}
        ingredientInput={ingredientInput}
        handleRemoveTag={handleRemoveTag}
        handleRemoveIngredient={handleRemoveIngredient}
      />
    </div>
  );
};

export default AddRecipe;
