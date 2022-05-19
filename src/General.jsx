import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

/*import SingleRecipe from './SingleRecipe';*/

import RecipeList from './RecipeList';



//Recipe stuff
const General = () => {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken'); //so we can query AFTER user input

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

/*
  const APP_ID = '3c1967ec';
  const APP_KEY = '25cbe79290ab3b483bf79eeabbdb2377';

  const [recipes, setRecipes] = useState([]); //lists recipes
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken'); //so we can query AFTER user input

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
*/
  return (
    
      <div className='App'>
          <h1 className='AppTitle'>Yummy Tummy</h1>
        <form onSubmit={getSearch} className='search-form'>
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">Search</button>
        </form>
        <h2>Results for "{query}"</h2>
        <RecipeList query={query}/>
      </div>
  );
};


export default General;
//link? router komponente