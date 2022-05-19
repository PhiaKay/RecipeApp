import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import General from './General';
import RecipeDetails from './RecipeDetails';
import SecretContext from './SecretContext';


const App = () => {

  const [secrets, setSecrets] = useState(); //initializes the state

  const getAPIKey = () => {
    const result = fetch('/apiKey.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json(response);
      })
      .then(function (resp) {
        setSecrets(resp);
      });
  }

  useEffect(() => {
    getAPIKey();
  }, [])

  return (
    <SecretContext.Provider value={secrets}>
      <Router>
        <Routes>
          <Route path="/" exact element={<General />} />
          <Route path="/recipedetails/:id" exact element={<RecipeDetails />} />
        </Routes>
      </Router>
    </SecretContext.Provider>
  );
};


export default App;