import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import './App.css';
import SecretContext from './SecretContext';


function RecipeDetails(match) {

    const secretContext = React.useContext(SecretContext);

    const { id } = useParams();

    useEffect(() => {
        if (secretContext) { fetchRecipeDetails(secretContext); }
    }, [secretContext]);



    const [recipeDetails, setRecipeDetails] = useState();

    const fetchRecipeDetails = async (secret) => {
        const answer = await fetch(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${secret.appID}&app_key=${secret.appKey}`)
        const recipeDetail = await answer.json();
        setRecipeDetails(recipeDetail);
    }

    return (
        <div>
            {/* prevents title from showing before the page is done loading */}
            {
                recipeDetails && <>
                    <h1>{recipeDetails.recipe.label}</h1>
                    <h2>{recipeDetails.recipe.dishType}</h2>
                    <img src={recipeDetails.recipe.image} />
                    <h3>{recipeDetails.recipe.mealType}</h3>
                    <ul>{recipeDetails.recipe.ingredientLines.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}</ul>
                    <h4><a href={recipeDetails.recipe.url} target="_blank">Click here</a> to see the full recipe</h4>


                </>
            }
        </div>
    );
}

export default RecipeDetails; 