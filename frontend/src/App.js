import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Grommet } from 'grommet';
import './App.css';
import Results from './components/Results';
import SingleResult from './components/SingleResult';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import {getRecipes, getMoreInfo} from './Api';


function App() {

  const [ingredient, setIngredient] = useState({
    ingredient: ''
  });

  const [result, setResult] = useState({
    result: []
  });


  async function foodSearch() {
    const recipes = await getRecipes(ingredient.ingredient);
    setResult({result: recipes});
  };
  

  useEffect(() => {
    console.log(result);
  }, [result]);


  return (
    <Grommet>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage ingredient={ingredient} setIngredient={setIngredient} handleSearch={foodSearch}/> } />
            <Route path='/results' element={<Results result={result} />} />
            <Route path='/results/:id' element={<SingleResult />} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Grommet>
  );
}

export default App;
