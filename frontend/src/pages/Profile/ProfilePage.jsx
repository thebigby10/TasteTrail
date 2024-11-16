import { useEffect, useState } from "react";
import { fetchRecipesForUser } from "../../utils/api";
import useAuth from "../../hooks/useAuth";
import Recipes from "../Recipe/Recipes";

const ProfilePage = () => {
  const [recipes, setRecipes] = useState([]);
  const { user } = useAuth();

  const fetch = async () => {
    const data = await fetchRecipesForUser(user?.email);
    setRecipes(data?.data);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <div>Profile Here.</div>
      <div>
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
};

export default ProfilePage;
