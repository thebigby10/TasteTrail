import { useState } from "react";
import RecipeForm from "../../components/RecipeForm";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");

  const navigate = useNavigate();

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.table({ title, imgUrl, tags, location, ingredients, description });

    try {
        const data = 'data';
        if(data) {
            Swal.fire({
                title:"Recipe added successfully",
                text: "Are you want to add more recipe?",
                icon: "success",
                showCancelButton: true,
                cancelButtonText: "No",
                confirmButtonColor: "#7E8940",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/add-recipe");
                  e.target.reset();
                  setTagInput("");
                  setIngredientInput("");
                }else{
                    navigate("/");
                }
              });
        }
        
    } catch (error) {
        console.log(error);
    }
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
