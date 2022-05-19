import React, { useEffect, useState } from 'react';
import './App.css';
import ListItem from './ListItem';
import SecretContext from './SecretContext';

const RecipeList = ({ query }) => {
  const secretContext = React.useContext(SecretContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (secretContext) { getRecipes(secretContext); }
  }, [query, secretContext]);

  const getRecipes = async (secret) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${secret.appID}&app_key=${secret.appKey}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (

    <div className='list'>
      {recipes.map(recipe => (

        <ListItem
          id={recipe.recipe.uri.substring(recipe.recipe.uri.lastIndexOf('_') + 1)}
          key={recipe.recipe.label}
          image={recipe.recipe.image}
          title={recipe.recipe.label}
          cuisineType={recipe.recipe.cuisineType}
        />
      ))}
    </div>
  );
};


export default RecipeList;