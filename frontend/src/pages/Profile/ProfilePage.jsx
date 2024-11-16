import { useEffect, useState } from "react";
import { fetchRecipesForUser } from "../../utils/api";
import useAuth from "../../hooks/useAuth";
import Recipes from "../Recipe/Recipes";
import Profile from "./Profile";

const ProfilePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [control, setControl] = useState(true)
  const { user } = useAuth();

  const fetch = async () => {
    const data = await fetchRecipesForUser(user?.email);
    setRecipes(data?.data);
  };

  useEffect(() => {
    fetch();
  }, [control]);
  return (
    <div>
        <Profile/>
        <Recipes control={control} setControl={setControl} recipes={recipes} />
    </div>
  );
};

export default ProfilePage;
