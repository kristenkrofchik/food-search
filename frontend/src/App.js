import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Grommet } from 'grommet';
import './App.css';
import Results from './components/Results';
import SingleResult from './components/SingleResult';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import {getRecipes} from './Api';

const theme = {
  global: {
    colors: {
      brand: '#0A0808',
      'accent-1': '#cebb10',
      'neutral-1': '#f5f5f1',
      background: {
        color: "brand"
      },
      text: {
        light: 'brand',
        dark: 'neutral-1',
      },
    },
    font: {
      family: "'Unna', serif",
      face: `
        @font-face {
          font-family: "Unna";
          src: url("./fonts/Unna/Unna-Regular.ttf") format('ttf');
        }
      `,
      size: '20px',
      height: '22px',
    },
  },
};

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
  
  return (
    <Grommet theme={theme}>
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
