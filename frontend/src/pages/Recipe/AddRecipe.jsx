import { useState } from "react";
import RecipeForm from "../../components/RecipeForm";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { uploadImage } from "../../utils/uploadImage";
import axios from "axios";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");

  const { user, setLoading, loading } = useAuth();

  const navigate = useNavigate();

  const imgbb = async (image) => {
    setLoading(true);
    const result = await uploadImage(image);
    return result;
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const image = await imgbb(e.target.image.files[0]);

    // console.log({
    //   title,
    //   imgUrl: image || "",
    //   tags,
    //   location,
    //   ingredients,
    //   description,
    //   creator: user?.email,
    // });

    try {
      setLoading(true);
      if (image) {
        const data = await axios.post("http://127.0.0.1:8000/recipe/add/", {
          title,
          imgUrl: image || "",
          tags,
          location,
          ingredients,
          description,
          creator: user?.email,
        });

        if (data.status == 200) {
          Swal.fire({
            title: "Recipe added successfully",
            text: "Are you want to add more recipe?",
            icon: "success",
            showCancelButton: true,
            cancelButtonText: "No",
            confirmButtonColor: "#7E8940",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/add-recipe");
              e.target.reset();
              setTagInput("");
              setIngredientInput("");
            } else {
              navigate("/");
            }
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          text: "Upload Image Again",
          confirmButtonColor: "#7e8940",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <RecipeForm
        setTitle={setTitle}
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
        loading={loading}
      />
    </div>
  );
};

export default AddRecipe;
