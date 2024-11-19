import { useEffect, useState } from "react";
import { fetchRecipes } from "./utils/api";
import Recipes from "./pages/Recipe/Recipes";
import useRefetch from "./hooks/useRefetch";
import Loading from "./components/Loading";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [control, setControl] = useState(true);
  const [loading, setLoading] = useState(false);
  const {refetch} = useRefetch();


  const fetch = async () => {
    setLoading(true)
    const data = await fetchRecipes();
    setRecipes(data.data);
    setLoading(false)
  };

  useEffect(() => {
    fetch();
  }, [control, refetch]);

  if(loading) return <Loading/>

  return (
    <>
      <div className="space-y-12 bg-white">
        <Recipes control={control} setControl={setControl} recipes={recipes} />
      </div>
    </>
  );
}

export default App;
