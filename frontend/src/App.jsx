import { useEffect, useState } from "react";
import { fetchRecipes } from "./utils/api";
import SingleRecipe from "./components/SingleRecipe";
import { Link } from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetch = async () => {
    const data = await fetchRecipes();
    setRecipes(data.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  // console.log(recipes[0]?.data);
  return (
    <>
      {recipes.map((r, idx) => (
        <Link to={`recipe-details/${r?.pk}`} key={idx}>
          <SingleRecipe recipe={r} />
        </Link>
      ))}
    </>
  );
}

export default App;
