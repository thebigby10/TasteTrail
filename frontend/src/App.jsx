import { useEffect, useState } from "react";
import { fetchRecipes } from "./utils/api";
import SingleRecipe from "./components/SingleRecipe";

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetch = async () => {
    const data = await fetchRecipes();
    setRecipes(data.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  console.log(recipes[0]);
  return (
    <>
      {recipes.map((r, idx) => (
        <div key={idx}>
          <SingleRecipe recipe={r} />
        </div>
      ))}
    </>
  );
}

export default App;
