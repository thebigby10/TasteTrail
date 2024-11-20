import { useEffect, useState } from "react";
import { fetchRecipesForUser, fetchUserInfo } from "../../utils/api";
import useAuth from "../../hooks/useAuth";
import Recipes from "../Recipe/Recipes";
import Profile from "./Profile";
import useRefetch from "../../hooks/useRefetch";

const ProfilePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [control, setControl] = useState(true);
  const [user, setUser] = useState({});
  const { user: currentUser } = useAuth();
  const { refetch } = useRefetch();

  const fetch = async () => {
    const data = await fetchRecipesForUser(currentUser?.email);
    setRecipes(data?.data);
  };

  const fetchUser = async () => {
    const data = await fetchUserInfo(currentUser?.email);
    setUser(data?.data);
  };

  useEffect(() => {
    fetchUser();
    fetch();
  }, [control, refetch]);
  return (
    <div>
      <Profile userInfo={user} totalRecipes={recipes?.length} />
      <hr />
      <Recipes control={control} setControl={setControl} recipes={recipes} />
    </div>
  );
};

export default ProfilePage;
