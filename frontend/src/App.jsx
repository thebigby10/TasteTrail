import { useEffect, useState } from "react";
import { fetchRecipes } from "./utils/api";
import Recipes from "./pages/Recipe/Recipes";
import useRefetch from "./hooks/useRefetch";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [control, setControl] = useState(true);

  const {refetch} = useRefetch();


  const fetch = async () => {
    const data = await fetchRecipes();
    setRecipes(data.data);
  };

  useEffect(() => {
    fetch();
  }, [control, refetch]);

  return (
    <>
      <div className="space-y-12 bg-white">
        <Recipes control={control} setControl={setControl} recipes={recipes} />
      </div>
    </>
  );
}

export default App;
