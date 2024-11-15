import { useEffect, useState } from "react";
import SingleRecipe from "../../components/SingleRecipe";
import { fetchRecipesForUser } from "../../utils/api";
import useAuth from "../../hooks/useAuth";

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
      <div className="space-y-12 bg-white">
        {recipes.map((r, idx) => (
          <div key={idx}>
            <SingleRecipe recipe={r} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
