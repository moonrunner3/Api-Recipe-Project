import RecipeCard from "./RecipeCard";
import useRecipe from "./useRecipe";

function App() {
   const { recipes, loading, error } = useRecipe();
  return(
    
    <div className="min-h-screen bg-red-100 p-6">
      <h1 className="text-2xl font-bold text-red-400 mb-4">Find your fav recipe now!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipes)=> (
         <RecipeCard key={recipes.id} recipe = {recipes}/>
      ))
    }
    {loading && <p>Loading...</p>}
    {error && <p className="text-red-600">{error}</p>}
    </div>
    </div>
  );

}

export default App;