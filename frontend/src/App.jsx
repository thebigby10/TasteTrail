import { useEffect, useState } from "react";
import { fetchRecipes } from "./utils/api";
import Recipes from "./pages/Recipe/Recipes";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [control, setControl] = useState(true);

  const fetch = async () => {
    const data = await fetchRecipes();
    setRecipes(data.data);
  };

  useEffect(() => {
    fetch();
  }, [control]);

  console.log(recipes[0]);
  return (
    <>
      <div className="space-y-12 bg-white">
        <Recipes control={control} setControl={setControl} recipes={recipes} />
      </div>
    </>
  );
}

export default App;
