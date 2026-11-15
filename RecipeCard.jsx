function RecipeCard(props) {
    return(
        <div className="bg-white rounded-xl shadow-md p-4">
            <h2 className="text-xl font-bold mt-3 mb-2 "> Recipe : {props.recipe.name}</h2>
            <img className="w-auto h-auto rounded-lg" src={props.recipe.image} alt={props.recipe.name}/>
            <p className="text-gray-600 mt-2">Cuisine : {props.recipe.cuisine}</p>
            <p className="mt-2">Rating : {props.recipe.rating}</p>
            <p className="mt-2 text-sm bg-red-50 rounded-md p-2">Difficulty : {props.recipe.difficulty}</p>
            
        </div>
    );
}

export default RecipeCard;