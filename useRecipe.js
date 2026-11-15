import { useEffect, useState } from "react";
import axios from 'axios';

function useRecipe () {
      const [recipes,setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchRecipes = async () => {
      try{
    const response = await axios.get("https://dummyjson.com/recipe");  
     setRecipes(response.data.recipes)
  }
  catch (error){
    setError("try again");
    
  }
  finally {
   setLoading(false)
    
  }

  }
  useEffect(()=>{fetchRecipes();},[]);
  return { recipes, loading, error };
}

export default useRecipe;